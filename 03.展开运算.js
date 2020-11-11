"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
{
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];
    //展开运算符：获取数组或者对象中的每一个元素
    //这边使用展开运算符对数组进行合并
    var arr = __spreadArrays(arr1, arr2);
}
{
    var obj1 = { a: 1, b: 2 };
    var obj2 = { c: 3 };
    //展开运算符：对对象进行合并
    var obj_1 = __assign(__assign({}, obj1), obj2);
}
