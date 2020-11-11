"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class是声明类的关键字
var Person = /** @class */ (function () {
    //构造函数：创建对象会默认调用的方法
    function Person(name, age) {
        //属性、成员变量  一定要通过变量来访问
        this.name = "zs";
        //加private修饰的变量是私有的成员变量  只能够在当前类内部使用
        this._house = "汤臣一品";
        //加protected修饰的变量是私有的成员变量 只能够在当前类和当前子类中使用
        this.car = "保时捷";
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "house", {
        //get是获取私有变量赋值
        get: function () {
            return this._house;
        },
        //私有成员变量_house的setter和getter方法
        //好处是提供了间接访问私有成员的变量_house的方式
        //set是给私有变量赋值
        set: function (house) {
            this._house = house;
        },
        enumerable: false,
        configurable: true
    });
    //静态方法：不用创建对象，可以通过类名来创建
    Person.test = function () {
        console.log("这是一个静态方法");
    };
    //成员方法   一定要通过对象来调用
    Person.prototype.sayHello = function (msg) {
        if (msg === void 0) { msg = "默认消息"; }
        console.log(this.name + msg);
    };
    //静态变量：不需要创建对象，可以直接通过类名来访问
    Person.counter = "中国";
    return Person;
}());
var p = new Person("李四", 123);
p.sayHello();
console.log(p.name);
Person.test();
//声明一个Student类继承Person类 :孩子继承父亲之后就自动拥有父亲非私有的成员信息
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, gender) {
        //调用父亲的构造函数初始化name和age的信息
        //当子类继承父类的时候，在构造函数中super是第一个出现的信息
        var _this = _super.call(this, name, age) || this;
        //初始化自己的gender信息
        _this.gender = gender;
        return _this;
    }
    //重写父亲的sayHello方法
    Student.prototype.sayHello = function (msg) {
        if (msg === void 0) { msg = "默认消息"; }
        //调用父亲的sayHello()方法
        _super.prototype.sayHello.call(this);
        //打印孩子自己的性别信息
        console.log("当前性别是", this.gender, this.car);
    };
    return Student;
}(Person));
var stu = new Student("学生", 111, "男");
stu.house = "希尔顿";
stu.sayHello();
console.log(stu.house);
