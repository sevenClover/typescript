"use strict";
//function  函数重载，函数名一样，函数的参数不一样
function fn(name, age) {
    return "12";
}
//函数的解构
//函数的可选参数中加?表示该参数可以有也可以没有
function fn2(name, gender) {
    return 1;
}
fn2("aa");
//该函数的参数可以有默认值，改参数的含义是指定参数的默认值
//一旦函数参数添加默认值的时候，调用函数参数的时候 该参数可以不传，当没有传参的时候就会使用默认值
function fn3(name, gender) {
    if (name === void 0) { name = "123"; }
    return 1;
}
fn3();
//剩余参数  表示除了之前参数之外的所有参数，是一个数组
//剩余参数一般是函数最后一个参数
function fn4(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(args);
    return 1;
}
fn4("张三", "李四", "王五", "赵六");
//箭头函数   有两个参数num1和num2,返回值是number
var fn5 = function (num1, num2) {
    return num1 + num2;
};
fn5(11, 22);
