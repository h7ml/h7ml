/*! For license information please see 54443.600727d2.js.LICENSE.txt */
(self.webpackChunkh7ml=self.webpackChunkh7ml||[]).push([["54443"],{99023:function(e,t,n){"use strict";n.r(t);var a=n("52676"),i=n("40453");function r(e){let t=Object.assign({p:"p",code:"code",a:"a",img:"img",pre:"pre",h1:"h1"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"\u72B6\u6001\u6A21\u5F0F\u4E3B\u8981\u5E94\u7528\u5728\u6E38\u620F\u3001\u5DE5\u4F5C\u6D41\u5F15\u64CE\u4E2D\uFF0C\u5176\u5B9E\u5C31\u662F\u6709\u9650\u72B6\u6001\u673A\u7684\u5B9E\u73B0\uFF0C\u76EE\u524D\u5F00\u53D1\u4E2D\u8FD8\u6CA1\u6709\u9047\u5230\u8FC7\uFF0C\u6B64\u5904\u7559\u5751\u3002"}),"\n",(0,a.jsxs)(t.p,{children:["\u4F46\u72B6\u6001\u6A21\u5F0F\u4E5F\u6BD4\u8F83\u6709\u610F\u601D\uFF0C\u5B83\u53EF\u4EE5\u5C06\u8FC7\u591A\u7684 ",(0,a.jsx)(t.code,{children:"if...else..."})," \u6216\u8005 ",(0,a.jsx)(t.code,{children:"switch...case..."})," \u62BD\u79BB\u51FA\u6765\uFF0C\u4F7F\u5F97\u4EE3\u7801\u7684\u6269\u5C55\u6027\u66F4\u597D\u4E00\u4E9B\u3002"]}),"\n",(0,a.jsxs)(t.p,{children:["\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u8BE6\u7EC6\u89E3\u91CA\u53EF\u4EE5\u67E5\u770B\u6781\u5BA2\u65F6\u95F4\u7684 ",(0,a.jsx)(t.a,{href:"http://gk.link/a/11c3G",target:"_blank",rel:"noopener noreferrer",children:"\u8BBE\u8BA1\u6A21\u5F0F\u4E4B\u7F8E"})," \u8BB2\u7684\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u4E00\u4E2A\u8D85\u7EA7\u9A6C\u91CC\u5965\u7684\u4F8B\u5B50\uFF0C\u5403\u4E86\u8611\u83C7\u3001\u5403\u4E86\u82B1\u90FD\u4F1A\u6709\u4E0D\u540C\u7684\u72B6\u6001\u8FDB\u884C\u8F6C\u79FB\u3002"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://static001.geekbang.org/resource/image/5a/6c/5aa0310b9b3ea08794cfc2f376c8f96c.jpg",alt:"img"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'public enum State {\n  SMALL(0),\n  SUPER(1),\n  FIRE(2),\n  CAPE(3);\n\n  private int value;\n\n  private State(int value) {\n    this.value = value;\n  }\n\n  public int getValue() {\n    return this.value;\n  }\n}\n\npublic class MarioStateMachine {\n  private int score;\n  private State currentState;\n\n  public MarioStateMachine() {\n    this.score = 0;\n    this.currentState = State.SMALL;\n  }\n\n  public void obtainMushRoom() {\n    if (currentState.equals(State.SMALL)) {\n      this.currentState = State.SUPER;\n      this.score += 100;\n    }\n  }\n\n  public void obtainCape() {\n    if (currentState.equals(State.SMALL) || currentState.equals(State.SUPER) ) {\n      this.currentState = State.CAPE;\n      this.score += 200;\n    }\n  }\n\n  public void obtainFireFlower() {\n    if (currentState.equals(State.SMALL) || currentState.equals(State.SUPER) ) {\n      this.currentState = State.FIRE;\n      this.score += 300;\n    }\n  }\n\n  public void meetMonster() {\n    if (currentState.equals(State.SUPER)) {\n      this.currentState = State.SMALL;\n      this.score -= 100;\n      return;\n    }\n\n    if (currentState.equals(State.CAPE)) {\n      this.currentState = State.SMALL;\n      this.score -= 200;\n      return;\n    }\n\n    if (currentState.equals(State.FIRE)) {\n      this.currentState = State.SMALL;\n      this.score -= 300;\n      return;\n    }\n  }\n\n  public int getScore() {\n    return this.score;\n  }\n\n  public State getCurrentState() {\n    return this.currentState;\n  }\n}\n\npublic class ApplicationDemo {\n  public static void main(String[] args) {\n    MarioStateMachine mario = new MarioStateMachine();\n    mario.obtainMushRoom();\n    int score = mario.getScore();\n    State state = mario.getCurrentState();\n    System.out.println("mario score: " + score + "; state: " + state);\n  }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["\u4E0A\u8FB9\u7684\u5B9E\u73B0\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF0C\u901A\u8FC7 ",(0,a.jsx)(t.code,{children:"if"})," \u6765\u8FDB\u884C\u72B6\u6001\u7684\u8F6C\u79FB\uFF0C\u5E76\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\uFF0C\u4F46\u53EF\u7EF4\u62A4\u6027\u548C\u6269\u5C55\u6027\u90FD\u5F88\u5DEE\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u72B6\u6001\u6A21\u5F0F\u8FDB\u884C\u6539\u5199\uFF0C\u5C06\u6BCF\u4E00\u79CD\u72B6\u6001\u62BD\u79BB\u51FA\u6765\uFF0C\u5C06\u72B6\u6001\u7684\u53D8\u66F4\u59D4\u6258\u7ED9\u72B6\u6001\u7C7B\u5B9E\u73B0\uFF0C\u539F\u6765\u7684\u7C7B\u4E0D\u518D\u5904\u7406\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"\npublic interface IMario { //\u6240\u6709\u72B6\u6001\u7C7B\u7684\u63A5\u53E3\n  State getName();\n  //\u4EE5\u4E0B\u662F\u5B9A\u4E49\u7684\u4E8B\u4EF6\n  void obtainMushRoom();\n  void obtainCape();\n  void obtainFireFlower();\n  void meetMonster();\n}\n\npublic class SmallMario implements IMario {\n  private MarioStateMachine stateMachine;\n\n  public SmallMario(MarioStateMachine stateMachine) {\n    // \u6301\u6709\u539F\u7C7B\u7684\u5F15\u7528\uFF0C\u6765\u5E2E\u52A9\u539F\u7C7B\u66F4\u65B0\u72B6\u6001\uFF0C\u76F8\u5F53\u4E8E\u5C06\u4E0A\u4E0B\u6587\u4F20\u9012\u8FC7\u6765\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u4E0A\u4E0B\u6587\u7684\u65B9\u6CD5\n    this.stateMachine = stateMachine;\n  }\n\n  @Override\n  public State getName() {\n    return State.SMALL;\n  }\n\n  @Override\n  public void obtainMushRoom() {\n    stateMachine.setCurrentState(new SuperMario(stateMachine));\n    stateMachine.setScore(stateMachine.getScore() + 100);\n  }\n\n  @Override\n  public void obtainCape() {\n    // \u66F4\u65B0\u539F\u7C7B\u4E2D\u7684\u72B6\u6001\u7C7B\n    stateMachine.setCurrentState(new CapeMario(stateMachine));\n    stateMachine.setScore(stateMachine.getScore() + 200);\n  }\n\n  @Override\n  public void obtainFireFlower() {\n    stateMachine.setCurrentState(new FireMario(stateMachine));\n    stateMachine.setScore(stateMachine.getScore() + 300);\n  }\n\n  @Override\n  public void meetMonster() {\n    // do nothing...\n  }\n}\n\npublic class SuperMario implements IMario {\n  private MarioStateMachine stateMachine;\n\n  public SuperMario(MarioStateMachine stateMachine) {\n    this.stateMachine = stateMachine;\n  }\n\n  @Override\n  public State getName() {\n    return State.SUPER;\n  }\n\n  @Override\n  public void obtainMushRoom() {\n    // do nothing...\n  }\n\n  @Override\n  public void obtainCape() {\n    stateMachine.setCurrentState(new CapeMario(stateMachine));\n    stateMachine.setScore(stateMachine.getScore() + 200);\n  }\n\n  @Override\n  public void obtainFireFlower() {\n    stateMachine.setCurrentState(new FireMario(stateMachine));\n    stateMachine.setScore(stateMachine.getScore() + 300);\n  }\n\n  @Override\n  public void meetMonster() {\n    stateMachine.setCurrentState(new SmallMario(stateMachine));\n    stateMachine.setScore(stateMachine.getScore() - 100);\n  }\n}\n\n// \u7701\u7565CapeMario\u3001FireMario\u7C7B...\n\npublic class MarioStateMachine {\n  private int score;\n  // \u5305\u542B\u4E00\u4E2A\u72B6\u6001\u7C7B\u7684\u5F15\u7528\n  private IMario currentState; // \u4E0D\u518D\u4F7F\u7528\u679A\u4E3E\u6765\u8868\u793A\u72B6\u6001\n\n  public MarioStateMachine() {\n    this.score = 0;\n    this.currentState = new SmallMario(this);\n  }\n\n  public void obtainMushRoom() {\n    // \u59D4\u6258\u7ED9\u72B6\u6001\u7C7B\u6267\u884C\n    this.currentState.obtainMushRoom();\n  }\n\n  public void obtainCape() {\n    this.currentState.obtainCape();\n  }\n\n  public void obtainFireFlower() {\n    this.currentState.obtainFireFlower();\n  }\n\n  public void meetMonster() {\n    this.currentState.meetMonster();\n  }\n\n  public int getScore() {\n    return this.score;\n  }\n\n  public State getCurrentState() {\n    return this.currentState.getName();\n  }\n\n  public void setScore(int score) {\n    this.score = score;\n  }\n\n  public void setCurrentState(IMario currentState) {\n    this.currentState = currentState;\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.h1,{id:"\u603B",children:["\u603B",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u603B",children:"#"})]}),"\n",(0,a.jsx)(t.p,{children:"\u72B6\u6001\u6A21\u5F0F\u5F88\u5DE7\u5999\uFF0C\u867D\u7136\u5B9E\u9645\u5F00\u53D1\u4E2D\u8FD8\u6CA1\u5E94\u7528\u5230\uFF0C\u4F46\u8FD8\u662F\u5F88\u6709\u610F\u601D\u7684\u3002"})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}t.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["posts%2FdesignPattern%2Fstate.md"]={toc:[],title:"\u72B6\u6001\u6A21\u5F0F",frontmatter:{title:"\u72B6\u6001\u6A21\u5F0F",category:["\u8BBE\u8BA1\u6A21\u5F0F","frontend"],tag:["\u8BBE\u8BA1\u6A21\u5F0F","frontend"],author:"h7ml",image:"https://www.h7ml.cn/logo.png",banner:"https://www.h7ml.cn/logo.png",date:"2022-03-04T08:42:19.000Z"}}}}]);