"use strict";
//接口定义约束规范
//1.接口可以对类进行规范
//2.接口可以对对象进行规范
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//implements表示实现接口
var People = /** @class */ (function () {
    function People() {
        this.name = "张三";
        this.age = 123;
        this.gender = "男";
        this.shape = {
            head: "头",
            arm: "金箍棒"
        };
    }
    People.prototype.say = function () {
        console.log("xx");
    };
    ;
    return People;
}());
var aaa = 1;
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.name = "老师";
        this.age = 123;
        this.gender = "男";
        this.shape = {
            head: "头",
            arm: "金箍棒"
        };
    }
    Teacher.prototype.say = function () {
        throw new Error("Method not implemented.");
    };
    return Teacher;
}());
//接口对对象进行规范
var obj2 = {
    name: "张三",
    age: 18,
    gender: "男",
    say: function () {
    }
};
var _08_____1 = __importStar(require("./08.\u547D\u540D\u7A7A\u95F4"));
console.log(_08_____1.API.obj, _08_____1.name2, _08_____1.name3, _08_____1.default);
