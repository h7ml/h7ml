/** 基本类型 */
true.constructor === Boolean; // true
('h7ml'.constructor ===
  String(
    // true
    2021
  ).constructor) ===
  Number; // true
// eslint-disable-next-line symbol-description
Symbol().constructor === Symbol; // true
// eslint-disable-next-line no-undef
((BigInt(2021).constructor ===
  // eslint-disable-next-line no-undef
  BigInt(
    // true

    /** 引用类型 */
    {}
  ).constructor) ===
  Object(
    // true
    []
  ).constructor) ===
  Array; // true

function Person(name) {
  this.name = name;
}
Person.prototype.constructor === Person; // true

// 修改原型造成 constructor 丢失
Person.prototype = {};
Person.prototype.constructor === Object; // true
