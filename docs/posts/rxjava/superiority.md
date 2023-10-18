---
title: RxJava的优势
icon: creative
date: 2019-03-27
author: h7ml
category: android
tag: rxjava
---

```android
public class MainActivity extends AppCompatActivity {

    private ImageView mImageView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mImageView = (ImageView) findViewById(R.id.image);
    }

 // 给图片加水印的方法
    private Bitmap createWatermark(Bitmap bitmap, String mark) {
        int w = bitmap.getWidth();
        int h = bitmap.getHeight();
        Bitmap bmp = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(bmp);
        Paint p = new Paint();
        // 水印颜色
        p.setColor(Color.parseColor("#C5FF0000"));
        // 水印字体大小
        p.setTextSize(150);
        //抗锯齿
        p.setAntiAlias(true);
        //绘制图像
        canvas.drawBitmap(bitmap, 0, 0, p);
        //绘制文字
        canvas.drawText(mark, 0, h / 2, p);
        canvas.save(Canvas.ALL_SAVE_FLAG);
        canvas.restore();
        return bmp;
    }
}
```

### 没用 RxJava 之前

```android
new Thread(new Runnable() {
    @Override
    public void run() {
        try {
            URL url = new URL("https://www.baidu.com/img/bd_logo1.png?where=super");
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            InputStream inputStream = urlConnection.getInputStream();
            Bitmap bitmap = BitmapFactory.decodeStream(inputStream);
            // 加一个水印
            bitmap = createWatermark(bitmap,"RxJava2.0");
            // 显示到图片
            Message message = Message.obtain();
            message.obj = bitmap;
            mHandler.sendMessage(message);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}).start();

private Handler mHandler = new Handler(){
    @Override
    public void handleMessage(Message msg) {
        Bitmap bitmap = (Bitmap) msg.obj;
        mImageView.setImageBitmap(bitmap);
    }
}
```

### 使用 RxJava 之后

```android
Observable.just("https://www.baidu.com/img/bd_logo1.png?where=super")
  .map(new Function<String, Bitmap>() { // 事件变换

      @Override
      public Bitmap apply(@NonNull String urlPath) throws Exception {
          URL url = new URL(urlPath);
          HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
          InputStream inputStream = urlConnection.getInputStream();
          Bitmap bitmap = BitmapFactory.decodeStream(inputStream);
          return bitmap;
      }
  })
  .map(new Function<Bitmap, Bitmap>() {

      @Override
      public Bitmap apply(@NonNull Bitmap bitmap) throws Exception {
          bitmap = createWatermark(bitmap, "RxJava2.0");
          return bitmap;
      }
  })
  .subscribeOn(Schedulers.io())
  .observeOn(AndroidSchedulers.mainThread())
  .subscribe(new Consumer<Bitmap>() {

      @Override
      public void accept(Bitmap bitmap) throws Exception {
          mImageView.setImageBitmap(bitmap);
      }
  });
```

### RxJava 优势

- 实现优雅：链式调用，一点到底

- 逻辑简洁：代码可读性高，解耦

- 使用简单：支持线程调度和各种操作符

- 扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅

- 扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅
