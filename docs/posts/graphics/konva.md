---
icon: card
order: 9
date: 2021-01-17
author: h7ml
category: graphics
tag: graphics
star: true
---

# konva

## 前言

用过 Canvas 的都知道它的 API 比较多，使用起来也很麻烦，比如我想绘制一个圆形就要调一堆 API，对开发算不上友好。

```js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
// 设置字体样式
context.font = '24px SimSun, Songti SC';
context.fillText('24px的宋体呈现', 20, 50);
// 绘制完整圆
context.fillStyle = 'RGB(255, 0, 0)';
context.beginPath();
context.arc(150, 75, 50, 0, Math.PI * 2);
context.stroke();
```

为了解决这个痛点，诞生了例如 PIXI、ZRender、Fabric 等 Canvas 库。今天要讲的 Konva 也是一个很优秀的 Canvas 框架，API 封装简洁易懂，基于 TypeScript 实现，有 React 和 Vue 版本。

```js
const stage = new Konva.Stage({
  container: 'root',
  width: 1000,
  height: 1000,
});
const layer = new Konva.Layer();
const group = new Konva.Group();

const text = new Konva.Text({
  text: 'Hello, this is some good text',
  fontSize: 30,
});

const circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
});
group.add(text);
group.add(circle);
layer.add(group);
stage.add(layer);
```

## 架构设计

### Konva Tree

从前言里面给的那段代码可以看出来，Konva 有一定的嵌套结构，有些类似 DOM 结构。通过 add 和 remove 就能实现子节点的添加和删除。 ![](https://camo.githubusercontent.com/f9afa6e7475eb6ffdf610aeae294ab6678a51e1a45ef71b05e2f583c1f0144f1/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f36373130386631382d303239312d346138312d613336312d3735653565626462366539642e706e67) Konva Tree 主要包括这么几部分：

1. Stage 根节点：这是应用的根节点，会创建一个 div 节点，作为事件的接收层，根据事件触发时的坐标来分发出去。一个 Stage 节点可以包含多个 Layer 图层。
2. Layer 图层：Layer 里面会创建一个 Canvas 节点，主要作用就是绘制 Canvas 里面的元素。一个 Layer 可以包含多个 Group 和 Shape。
3. Group 组：Group 包含多个 Shape，如果对其进行变换和滤镜，里面所有的 Shape 都会生效。
4. Shape：指 Text、Rect、Circle 等图形，这些是 Konva 封装好的类。 ![](https://camo.githubusercontent.com/29a78d23111ca442579c11ed9c56d8d8f50288dcf9e99bc6128e0a8de0470f71/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f34333435323935312d386131372d343665642d613136302d6563343065393234396132322e706e67)

### build dom

Stage 创建的时候会去创建两个 Canvas 节点以及 content 容器节点，这两个 Canvas 节点是用于 perfectDrawEnabled 的，后面会讲到。这里需要注意的就是这个 content 节点，作为整个 Konva 画布的容器，之后的 Layer 都会被 append 进去。

```js
  _buildDOM() {
    this.bufferCanvas = new SceneCanvas({
      width: this.width(),
      height: this.height(),
    });
    this.bufferHitCanvas = new HitCanvas({
      pixelRatio: 1,
      width: this.width(),
      height: this.height(),
    });

    if (!Konva.isBrowser) {
      return;
    }
    var container = this.container();
    if (!container) {
      throw 'Stage has no container. A container is required.';
    }
    // clear content inside container
    container.innerHTML = '';

    // content
    this.content = document.createElement('div');
    this.content.style.position = 'relative';
    this.content.style.userSelect = 'none';
    this.content.className = 'konvajs-content';

    this.content.setAttribute('role', 'presentation');

    container.appendChild(this.content);

    this._resizeDOM();
  }
```

在调用 Stage.add 的时候，不仅会调用 Layer 的绘制方法，还会把 Layer 的 Canvas 节点 append 进去。

```js
  add(layer: Layer, ...rest) {
    if (arguments.length 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }
    super.add(layer);

    var length = this.children.length;
    if (length MAX_LAYERS_NUMBER) {
      Util.warn(
        'The stage has ' +
          length +
          ' layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.'
      );
    }
    layer.setSize({ width: this.width(), height: this.height() });

    // draw layer and append canvas to container
    layer.draw();

    if (Konva.isBrowser) {
      this.content.appendChild(layer.canvas._canvas);
    }

    // chainable
    return this;
  }
```

## 渲染

### 批量渲染

从前面的代码中可以看到，没有手动调用绘制方法，但依然会进行绘制，说明会在一定的时机进行渲染。 这个时机就在 add 方法里面，不管 Group、Layer、Stage 哪个先 add，最终都会触发渲染。他们三个都继承了 Container 类，在 Container 类里面有一个 add 方法，我们来一探究竟。

```js
  add(...children: ChildType[]) {
    if (arguments.length 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }
    var child = children[0];
    // 如果要添加的子节点已经有个父节点，那就先将其从父节点移除，再插入到当前节点里面
    if (child.getParent()) {
      child.moveTo(this);
      return this;
    }
    this._validateAdd(child);
    // 设置子节点的 index 和 parent
    child.index = this.getChildren().length;
    child.parent = this;
    child._clearCaches();
    this.getChildren().push(child);
    this._fire('add', {
      child: child,
    });
    // 请求绘制
    this._requestDraw();
    return this;
  }
```

除了一些常规的处理之外，渲染的关键就在 `_requestDraw` 方法里面。这里调用了 Layer 上面的 `batchDraw` 进行批量重绘。

```js
  _requestDraw() {
    if (Konva.autoDrawEnabled) {
      const drawNode = this.getLayer() || this.getStage();
      drawNode?.batchDraw();
    }
  }
```

这个批量重绘的原理是利用 requestAnimationFrame 方法将要绘制的内容放到下一帧来绘制。这样同时修改多个图形多个属性就不需要反复绘制了。

```js
  batchDraw() {
    // _waitingForDraw 保证只会执行一次 requestAnimFrame
    if (!this._waitingForDraw) {
      this._waitingForDraw = true;
      // 如果调用多次方法修改 Shape 属性，这里就会批量绘制
      // 避免了多次绘制带来的开销
      Util.requestAnimFrame(() ={
        this.draw();
        this._waitingForDraw = false;
      });
    }
    return this;
  }
```

### Shape 绘制

所有涉及到图形绘制的地方都是调用 Shape 实现类上的 `_sceneFunc` 方法，以 Circle 为例：

```js
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
    context.closePath();
    context.fillStrokeShape(this);
  }
```

在 Shape 和 Node 两个基类上面只负责调用，具体的实现放到具体的 Shape 实现上面。这样带来两个好处，一个是可以实现自定义图形，另一个是以后要是支持 SVG、WebGL 会很方便。

### 离屏渲染

什么是离屏渲染？就是在屏幕之外预渲染一个 Canvas，之后通过 drawImage 的形式将其绘制到屏幕要显示的 Canvas 上面，对形状相似或者重复的对象绘制性能提升非常高。假设我们有个列表页，每次滚动的时候全部重新绘制开销会比较大。但如果我们实现一个 Canvas 池，把已经绘制过的列表项存起来。下次滚动到这里的时候，就可以直接从 Canvas 池里面取出来 drawImage 到页面上了。在 Node 类上面有个 cache 方法，这个方法可以实现细粒度的离屏渲染。 cache 方法内部会创建三个 canvas，分别是：

1. cachedSceneCanvas：用于绘制图形的 canvas 的离屏渲染。
2. cachedFilterCanvas：用于处理滤镜效果。
3. cachedHitCanvas：用于处理 hitCanvas 的离屏渲染。

```js
  _drawCachedSceneCanvas(context: Context) {
    context.save();
    context._applyOpacity(this);
    context._applyGlobalCompositeOperation(this);
    // 获取离屏的 Canvas
    const canvasCache = this._getCanvasCache();
    context.translate(canvasCache.x, canvasCache.y);

    var cacheCanvas = this._getCachedSceneCanvas();
    var ratio = cacheCanvas.pixelRatio;
    // 将离屏 Canvas 绘制到要展示的 Canvas 上面
    context.drawImage(
      cacheCanvas._canvas,
      0,
      0,
      cacheCanvas.width / ratio,
      cacheCanvas.height / ratio
    );
    context.restore();
  }
```

### perfectDrawEnabled

Canvas 在绘制 stroke 和 fill 的时候，如果遇到透明度的时候，stroke 会和 fill 的一部分重合到一起，就不符合我们的预期了。比如下面这段代码：

```js
const canvas = document.getElementById('canvas');
const bufferCanvas = document.createElement('canvas');
const bufferCtx = bufferCanvas.getContext('2d');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'green';
ctx.lineWidth = 10;
ctx.strokeRect(30, 30, 50, 50);
ctx.globalAlpha = 0.5;
ctx.fillStyle = 'RGB(255, 0, 0)';
ctx.fillRect(30, 30, 50, 50);
```

它的实际展示效果是这样的，中间的 stroke 和 fill 有一部分重叠。 ![](https://camo.githubusercontent.com/4828d368c32e74643cbb46d198154e8d11830dc3610a082b9eca3f624f09449f/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f30343531323865362d303637332d343535662d383739302d6335336437346365353662622e706e67) 在这种情况下，KonvaJS 实现了一个 perfectDrawEnabled 功能，它会这样做：

1. 在 bufferCanvas 上绘制 Shape
2. 绘制 fill 和 stroke
3. 在 layer 上应用透明度
4. 将 bufferCanvas 绘制到 sceneCanvas 上面可以看到开启 perfectDrawEnabled 和关闭 perfectDrawEnabled 的区别很明显： ![](https://camo.githubusercontent.com/5aa09e0b1727de6052f80f44d0dd13736059acfe0e84bb681cb09cc4f4d01ec5/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f63613061646131612d613263322d343363322d626262362d3534353264323365343534362e706e67) 它会在 Stage 里面创建一个 bufferCanvas 和 bufferHitCanvas，前者就是针对 sceneCanvas 的，后者是针对 hitCanvas 的。在 Shape 的 drawScene 方法里面，会判断是否使用 bufferCanvas：

```js
// if buffer canvas is needed
if (this._useBufferCanvas() && !skipBuffer) {
  stage = this.getStage();
  bufferCanvas = stage.bufferCanvas;
  bufferContext = bufferCanvas.getContext();
  bufferContext.clear();
  bufferContext.save();
  bufferContext._applyLineJoin(this);
  // layer might be undefined if we are using cache before adding to layer
  var o = this.getAbsoluteTransform(top).getMatrix();
  bufferContext.transform(o[0], o[1], o[2], o[3], o[4], o[5]);

  // 在 bufferCanvas 绘制 fill 和 stroke
  drawFunc.call(this, bufferContext, this);
  bufferContext.restore();

  var ratio = bufferCanvas.pixelRatio;

  if (hasShadow) {
    context._applyShadow(this);
  }
  // 在 sceneCanvas 应用透明度
  context._applyOpacity(this);
  context._applyGlobalCompositeOperation(this);
  // 将 bufferCanvas 绘制到 sceneCanvas
  context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
}
```

## 事件

Konva 里面的事件是在 Canvas 外层创建了一个 div 节点，在这个节点上面接收了 DOM 事件，再根据坐标点来判断当前点击的是哪个 Shape，然后进行事件分发。所以关键就在如何判断当前点击的 Shape 是哪个？相比 ZRender 里面比较复杂的计算，Konva 使用了一个相当巧妙的方式。

### 事件分发

Konva 目前支持下面这么多事件，EVENTS 是 `事件名-事件处理方法` 的映射。

```js
EVENTS = [
    [MOUSEENTER, '_pointerenter'],
    [MOUSEDOWN, '_pointerdown'],
    [MOUSEMOVE, '_pointermove'],
    [MOUSEUP, '_pointerup'],
    [MOUSELEAVE, '_pointerleave'],
    [TOUCHSTART, '_pointerdown'],
    [TOUCHMOVE, '_pointermove'],
    [TOUCHEND, '_pointerup'],
    [TOUCHCANCEL, '_pointercancel'],
    [MOUSEOVER, '_pointerover'],
    [WHEEL, '_wheel'],
    [CONTEXTMENU, '_contextmenu'],
    [POINTERDOWN, '_pointerdown'],
    [POINTERMOVE, '_pointermove'],
    [POINTERUP, '_pointerup'],
    [POINTERCANCEL, '_pointercancel'],
    [LOSTPOINTERCAPTURE, '_lostpointercapture'],
  ];
  // 绑定事件
  _bindContentEvents() {
    if (!Konva.isBrowser) {
      return;
    }
    EVENTS.forEach(([event, methodName]) ={
      // 事件绑定在 content 这个 dom 节点上面
      this.content.addEventListener(event, (evt) ={
        this[methodName](evt);
      });
    });
  }
```

我们以 mousedown 这个具体的事件作为例子来分析，它的处理方法在 `_pointerdown` 里面。 `_pointerdown` 先执行了 `setPointersPositions`，计算当前鼠标点击的坐标，减去 content 相对页面的坐标，得到了当前点击相对于 content 的坐标。同时将其存入了 `_changedPointerPositions` 里面。 ![](https://camo.githubusercontent.com/b9b5d26a9416879dc1be928551640eba483b5af33a0af809def5f2b2fc6a5fea/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f32393861326332322d363837332d343464352d393234662d3331306461343239313931302e706e67) 然后遍历 `_changedPointerPositions`，通过 `getIntersection` 获取到了点击的 Shape 图形。这个 `getIntersection` 遍历调用了每个 Layer 的 `getIntersection` 方法，通过 Layer 获取到了对应的 Shape。因为可以存在多个 Layer，每个 Layer 也可以在同一个位置绘制多个 Shape，所以理论上可以获取到多个 Shape，Konva 这里只取了第一个 Shape，按照 Layer -Shape 的顺序来的。 ![](https://camo.githubusercontent.com/a462a32aa3f2bf7f01f52a225069d66a35b7ffbb9de0320ec7bfabb81a21b2e0/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f34663139613934392d303035372d346434632d393032342d3561633637373838663239382e706e67) 然后 Stage 会调用 Shape 上面的 `_fireAndBubble` 方法，这个方法调用 `_fire` 发送 Konva 自己的事件，此时通过 on 绑定的事件回调就会触发，有点儿像 jQuery 那样。然后 Konva 会继续往上找到父节点，继续调用父节点的 `_fireAndBubble` 方法，直到再也找不到父节点为止，这样就实现了事件冒泡。对于不想被点击到的 Shape 来说，可以设置 `isListening` 属性为 false，这样事件就不会触发了。

### 匹配 Shape

那么 Layer 是怎么根据点击坐标获取到对应的 Shape 呢？如果是规则的图形（矩形、圆形）还比较容易计算，要是下面这种不规则图形呢？ ![](https://camo.githubusercontent.com/56f41e90923fd22589829ba27314071b45fccabf3584bd84fef6096769120833/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f33353666323635322d663831332d343434362d393265612d3563383735363035303631342e706e67) 众所周知，在 Canvas 里面有个 `getImageData` 方法，它会根据传入的坐标来返回一个 ImageData 信息，里面有当前坐标对应的色值。那么我们能不能根据这个色值来获取到对应的 Shape 呢？ ![](https://camo.githubusercontent.com/e975ab71150c628666949ce3803e1e6d50e6045bd370850de3e2ae65f495aa20/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f36396264363065342d306335302d346465662d613564372d3665303531393761323663392e706e67) 因此，Konva 在创建 Layer 的时候会创建两个 Canvas，一个用于 sceneCanvas 用于绘制 Shape，另一个 hitCanvas 在内存里面，用于判断是否被打击。

```js
canvas = new SceneCanvas();
hitCanvas = new HitCanvas({
  pixelRatio: 1,
});
```

![](https://camo.githubusercontent.com/352ea8233908db8e9464a7b814deb15ebf770b61c171ca4067da513109f29deb/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f35333735653761642d393835332d343236302d613265312d6631633263643738366662642e706e67) 当 Shape 初始化的时候，会生成一个随机的颜色，以这个颜色作为 key 存入到 shapes 数组里面。

```js
  constructor(config?: Config) {
    super(config);
    // set colorKey
    let key: string;

    while (true) {
      // 生成随机色值
      key = Util.getRandomColor();
      if (key && !(key in shapes)) {
        break;
      }
    }
    this.colorKey = key;
    // 存入 shapes 数组
    shapes[key] = this;
  }
```

每次在 sceneCanvas 上面绘制的时候，同样会在内存中的 hitCanvas 里面绘制一遍，并且将上面随机生成的色值作为 fill 和 stroke 的颜色填充。当点击 sceneCanvas 的时候，获取到点击的坐标点，通过调用 hitCanvas 的 `getImageData` 就可以获取到 colorKey，然后再通过 colorKey 就能找到对应的 Shape 了，真是相当巧妙的实现。 ![](https://camo.githubusercontent.com/821609f511a6cd1760042d9fea1d66ce53deabed1e2628df0683b73e898cba16/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f62376437653336382d643833622d343765342d613234382d3734613732306133656665632e706e67) 但这种方式也有缺陷，因为生成的随机 hex 颜色是有上限的，最多会会有 256*256* 256 = 16777216 种，如果超过了这么多就会导致匹配不准确。不过考虑一下如果有 16777216 个 DOM 节点，浏览器就会卡爆了，换成这么多 Canvas 图形一样会导致性能爆炸。

### 自定义 hitFunc

如果你想自定义事件响应区域，Konva 也提供了 hitFunc 方法给你实现。在绘制 hitCanvas 的时候，原本的绘制 sceneFunc 就失效了，取而代之的是绘制 hitFunc。

```js
  drawHit(can?: HitCanvas, top?: Node, skipDragCheck = false) {
    if (!this.shouldDrawHit(top, skipDragCheck)) {
      return this;
    }

    var layer = this.getLayer(),
      canvas = can || layer.hitCanvas,
      context = canvas && canvas.getContext(),
      // 如果有 hitFunc，就不使用 sceneFunc
      drawFunc = this.hitFunc() || this.sceneFunc(),
      cachedCanvas = this._getCanvasCache(),
      cachedHitCanvas = cachedCanvas && cachedCanvas.hit;

    if (!this.colorKey) {
      Util.warn(
        'Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()'
      );
    }
    // ...
    drawFunc.call(this, context, this);
    // ...
}
```

### 拖拽事件

Konva 的拖拽事件没有使用原生的方法，而是基于 mousemove 和 touchmove 来计算移动的距离，进而手动设置 Shape 的位置，实现逻辑比较简单，这里不细说。

## 滤镜

Konva 支持多种滤镜，在使用滤镜之前需要先将 Shape cache 起来，然后使用 `filter()` 方法添加滤镜。 在 cache 里面除了创建用于离屏渲染的 Canvas，还会创建滤镜 Canvas。滤镜处理在 `_getCachedSceneCanvas` 里面。 ![](https://camo.githubusercontent.com/5736b6469b94b56d537b2a76c8999e3b307278d42527a4bb7f4d87f2b68357cd/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f39346434613735622d626262362d343861312d623036302d6165376530386164626130382e706e67) 首先将 sceneCanvas 通过 drawImage 绘制到 filterCanvas 上面，接着 filterCanvas 获取所有的 ImageData，遍历所有设置的滤镜方法，将 ImageData 传给滤镜方法来处理。处理完 ImageData 之后，再将其通过 putImageData 绘制到 filterCanvas 上面。

```js
if (filters) {
  if (!this._filterUpToDate) {
    var ratio = sceneCanvas.pixelRatio;
    filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
    try {
      len = filters.length;
      filterContext.clear();

      // copy cached canvas onto filter context
      filterContext.drawImage(
        sceneCanvas._canvas,
        0,
        0,
        sceneCanvas.getWidth() / ratio,
        sceneCanvas.getHeight() / ratio
      );
      imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());

      // apply filters to filter context
      for (n = 0; n < len; n++) {
        filter = filters[n];
        if (typeof filter !== 'function') {
          Util.error(
            'Filter should be type of function, but got ' + typeof filter + ' instead. Please check correct filters'
          );
          continue;
        }
        filter.call(this, imageData);
        filterContext.putImageData(imageData, 0, 0);
      }
    } catch (e) {
      Util.error(
        'Unable to apply filter. ' +
          e.message +
          ' This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.'
      );
    }

    this._filterUpToDate = true;
  }

  return filterCanvas;
}
```

那滤镜效果怎么画上去的呢？在 konva 里面进行了特殊处理，如果存在 filterCanvas，那就不会使用 cacheCanvas 了，也就是我们原本用于缓存的离屏 Canvas 会被 filterCanvas 进行替代。最终 filterCanvas 会通过 drawImage 的方式绘制到 sceneCanvas 上面。

## 选择器

Konva 实现了选择器，方便我们快速查找到某个 Shape。目前主要有三种选择器，分别是 id 选择器、name 选择器、type 选择器。前两者需要在实例化的时候传入一个 id 或者 name 属性，后者则是根据类名（Rect、Line 等）来查找的。选择器查找的时候需要调用 find 方法，这个 find 方法挂载在 Container 类上面。它调用了 \_descendants 进行子节点的遍历，将遍历的 node 节点调用 isMatch 方法来判断是否匹配上。

```js
  _generalFind<ChildNode extends Node = Node>(
    selector: string | Function,
    findOne: boolean
  ) {
    var retArr: Array<ChildNode= [];

    // 调用 _descendants 获取所有的子节点
    this._descendants((node: ChildNode) ={
      const valid = node._isMatch(selector);
      if (valid) {
        retArr.push(node);
      }
      // 如果是 findOne，后面的就不继续执行了
      if (valid && findOne) {
        return true;
      }
      return false;
    });

    return retArr;
  }

  private _descendants(fn: (n: Node) =boolean) {
    let shouldStop = false;
    const children = this.getChildren();
    for (const child of children) {
      shouldStop = fn(child);
      if (shouldStop) {
        return true;
      }
      if (!child.hasChildren()) {
        continue;
      }
      // 如果子节点也有子节点，那就递归遍历
      shouldStop = (child as any)._descendants(fn);
      // 如果应该停止查找（一般是 findOne 的时候就不需要查找后面的了）
      if (shouldStop) {
        return true;
      }
    }
    return false;
  }
```

在 isMatch 里面可以看到后根据是什么类型的选择器来分别进行匹配。

```js
// id selector
if (sel.charAt(0) === '#') {
  if (this.id() === sel.slice(1)) {
    return true;
  }
} else if (sel.charAt(0) === '.') {
  // name selector
  if (this.hasName(sel.slice(1))) {
    return true;
  }
} else if (this.className === sel || this.nodeType === sel) {
  return true;
}
```

## 序列化

Konva 还支持对 Stage 的序列化和反序列化，简单来说就是把 Stage 的数据导出成一份 JSON 数据以及把 JSON 数据导入，方便我们在 NodeJS 端进行服务端渲染。序列化主要在 toObject 方法里面，它会对函数和 DOM 节点进行过滤，只保留一份描述信息，比如 Layer 的信息、Shape 的信息等等，有点儿类似 React 里面的 Virtual DOM。

```js
  toObject() {
    var obj = {} as any,
      attrs = this.getAttrs(),
      key,
      val,
      getter,
      defaultValue,
      nonPlainObject;

    obj.attrs = {};

    for (key in attrs) {
      val = attrs[key];
      nonPlainObject =
        Util.isObject(val) && !Util._isPlainObject(val) && !Util._isArray(val);
      if (nonPlainObject) {
        continue;
      }
      getter = typeof this[key] === 'function' && this[key];
      delete attrs[key];
      // 特殊处理函数，将其执行后把结果挂载到当前key上面
      defaultValue = getter ? getter.call(this) : null;
      // restore attr value
      attrs[key] = val;
      if (defaultValue !== val) {
        obj.attrs[key] = val;
      }
    }

    obj.className = this.getClassName();
    return Util._prepareToStringify(obj);
  }
```

而反序列化则是对传入的 JSON 信息进行解析，根据 className 来创建不同的对象，对深层结构进行递归，然后 add 到父节点里面。

```js
  static _createNode(obj, container?) {
    var className = Node.prototype.getClassName.call(obj),
      children = obj.children,
      no,
      len,
      n;

    // if container was passed in, add it to attrs
    if (container) {
      obj.attrs.container = container;
    }

    if (!Konva[className]) {
      Util.warn(
        'Can not find a node with class name "' +
          className +
          '". Fallback to "Shape".'
      );
      className = 'Shape';
    }
    // 根据传入的 className 来实例化
    const Class = Konva[className];

    no = new Class(obj.attrs);
    if (children) {
      len = children.length;
      for (n = 0; n < len; n++) {
        // 如果还有子节点，那就递归创建
        no.add(Node._createNode(children[n]));
      }
    }

    return no;
  }
```

## React

Konva 和 React 绑定没有使用重新封装一遍组件的方式，而是采用了和 react-dom、react-native 一样的形式，基于 react-reconciler 来实现一套 hostConfig，从而定制自己的 Host Component（宿主组件）。

### react-reconciler

React Fiber 架构诞生之后，他们就将原来的 React 核心代码做了抽离。主要包括 react、react-reconciler 和 platform 实现（react-dom、react-native 等）三部分。在 react-reconciler 里面实现了大名鼎鼎的 Diff 算法、时间切片、调度等等，它还暴露给了我们一个 hostConfig 文件，允许我们在各种钩子函数中实现自己的渲染。在 React 里面，有两种组件类型，一种是 Host Component（宿主组件），另一种是 Composition Component（复合组件）。在 DOM 里面，前者就是 h1、div、span 等元素，在 react-native 里面，前者就是 View、Text、ScrollView 等元素。后者则是我们基于 Host Component 自定义的组件，比如 App、Header 等等。在 react-reconciler 里面，它允许我们去自定义 Host Component 的渲染（增删查改），这也意味着跨平台的能力。我们只需要编写一份 hostConfig 文件，就能够实现自己的渲染。 ![](https://camo.githubusercontent.com/695f54a7f71577ec66604e45270bc623eabb928e823bcce2b564d636de17997a/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f64333463333963632d386464312d346239382d613933332d6533633338303164643739332e706e67) 参考上面的架构图，会发现不管是渲染到 native、canvas，甚至是小程序都可以。业界已经有方案是基于这个来实现了，可以参考蚂蚁金服的 remax：[Remax - 使用真正的 React 构建小程序](https://zhuanlan.zhihu.com/p/79788488)

### react-konva

react-konva 的主要实现就在 ReactKonvaHostConfig.js 里面，它利用 Konva 原本的 API 实现了对 Virtual DOM 的映射，响应了 Virtual DOM 的增删查改。这里从中抽取了部分源码：

```js
// 创建一个实例
export function createInstance(type, props, internalInstanceHandle) {
  let NodeClass = Konva[type];

  const propsWithoutEvents = {};
  const propsWithOnlyEvents = {};

  for (var key in props) {
    var isEvent = key.slice(0, 2) === 'on';
    if (isEvent) {
      propsWithOnlyEvents[key] = props[key];
    } else {
      propsWithoutEvents[key] = props[key];
    }
  }
  // 根据传入的 type 来创建一个实例，相当于 new Layer、new Rect 等
  const instance = new NodeClass(propsWithoutEvents);
  // 将传入的 props 设置到实例上面
  // 如果是普通的 prop，就直接通过 instance.setAttr 更新
  // 如果是 onClick 之类的事件，就通过 instance.on 来绑定
  applyNodeProps(instance, propsWithOnlyEvents);

  return instance;
}
// 插入子节点，直接调用 konva 的 add 方法
export function appendChild(parentInstance, child) {
  if (child.parent === parentInstance) {
    child.moveToTop();
  } else {
    parentInstance.add(child);
  }

  updatePicture(parentInstance);
}

// 移除子节点，直接调用 destroy 方法
export function removeChild(parentInstance, child) {
  child.destroy();
  child.off(EVENTS_NAMESPACE);
  updatePicture(parentInstance);
}

// 通过设置 zIndex 实现 insertBefore
export function insertBefore(parentInstance, child, beforeChild) {
  // child._remove() will not stop dragging
  // but child.remove() will stop it, but we don't need it
  // removing will reset zIndexes
  child._remove();
  parentInstance.add(child);
  child.setZIndex(beforeChild.getZIndex());
  updatePicture(parentInstance);
}
```

## vue-konva

在 Vue 上面，Konva 通过 Vue.use 注册了一个插件，这个插件里面分别注册了每个组件。

```js
const components = [
  {
    name: 'Stage',
    component: Stage
  },
  ...KONVA_NODES.map(name =({
    name,
    component: KonvaNode(name)
  }))
];
const VueKonva = {
  install: (Vue, options) ={
    let prefixToUse = componentPrefix;
    if(options && options.prefix){
      prefixToUse = options.prefix;
    }
    components.forEach(k ={
      Vue.component(`${prefixToUse}${k.name}`, k.component);
    })
  }
};

export default VueKonva;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueKonva);
}
```

再来看看 KonvaNode 的实现，在 KonvaNode 里面，对于节点的增删查改都在 Vue 的生命周期里面实现的。 在 Vue 的 created 生命周期里面调用 initKonva 去 new 一个 NodeClass，和上面 React 的方式几乎一样。

```js
      initKonva() {
        const NodeClass = window.Konva[nameNode];

        if (!NodeClass) {
          console.error('vue-konva error: Can not find node ' + nameNode);
          return;
        }

        this._konvaNode = new NodeClass();
        this._konvaNode.VueComponent = this;

        this.uploadKonva();
      },
```

而在 Updated 的时候去进行 Props 的更新，在 destroyed 里面对节点进行 destroy，实现上更加简洁一些。

```js
    updated() {
      this.uploadKonva();
      checkOrder(this.$vnode, this._konvaNode);
    },
    destroyed() {
      updatePicture(this._konvaNode);
      this._konvaNode.destroy();
      this._konvaNode.off(EVENTS_NAMESPACE);
    },
```

## 缺陷

### 脏矩形

在性能方面，Konva 对比 PIXI、ZRender 这些库还是不太够看。如果我们 Layer 上有非常多的 Shape，如果想更新某个 Shape，按照 Konva 的实现方式依然会全量绘制。虽然 Konva 支持单个 Shape 重绘，但实现上是无脑覆盖原来的位置，这也意味着如果你的图形在其他节点图形下面，就会出现问题。所以这里缺少非常重要的局部更新能力，也就是我们常说的脏矩形。脏矩形就是指当我们更新一个 Shape 的时候，利用碰撞检测计算出和他相交的所有 Shape，将其进行合并，计算出一块儿脏区域。然后我们通过 clip 限制 Canvas 只在这块儿脏区进行绘制，这样就实现了局部更新。 ![](https://camo.githubusercontent.com/0c8f0933195af9f1afa41f3f2a373158a101454f3c36c8a585eee32337a9f33c/68747470733a2f2f66696c65732e6d646e6963652e636f6d2f757365722f343537372f63616536613739652d623937312d343238392d393432652d6536303539366537303432362e706e67) 可惜 Konva 的包围盒实现的非常简单，不适合做碰撞检测，它也没有提供脏矩形的能力。
