
概念：每个**构造函数**都有一个**原型对象**，而**原型对象**都包含一个指向**构造函数**的指针，**实例**都包含一个指向**原型对象**的内部指针。就构成了实例与原型的链条,这样的链条就称为原型链。

```js
function Person(){  // 函数
    this.name = 'nick';
}
var person = new Person();
console.log(new Person()) // 构造函数
console.log(new Person().__proto__) // 原型对象 = {constructor: ƒ}
console.log(new Person().constructor) // 原型对象 -> 构造函数 ƒ Person()
console.log(person) // 实例
console.log(person.__proto__) // 原型对象 = {constructor: ƒ}
```

## prototype 
> 只有函数才有prototype属性

每个函数都有一个prototype属性，它指向**原型对象**。

```js
function Person(){  // 函数
    this.name = 'nick';
}
console.log(Person.prototype) // 指向原型对象 {constructor: ƒ}
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // nick
console.log(person2.name) // nick
```
函数的 **prototype** 属性指向了一个对象，这个对象正是调用该**构造函数**而创建的实例的**原型对象**。

## __ proto__

每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。

```js
function Person() {}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

## constructor
每个原型都有一个 constructor 属性指向关联的构造函数。
```js
function Person() {}
console.log(Person === Person.prototype.constructor); // true
```