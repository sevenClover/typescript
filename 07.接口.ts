//接口定义约束规范
//1.接口可以对类进行规范
//2.接口可以对对象进行规范

interface Shape{
    head:string;
    arm:string
}
//声明一个Human的接口，里面描述了Human应有 的行为/属性
interface Human{
    readonly   name:string;  //readonly表示只读属性
        age:number;
        gender:string;
        say():void;
        shape?:Shape;  //?表示可有可无
}
//implements表示实现接口
class People implements Human{
    name: string = "张三";
    age: number = 123;
    gender: string = "男";
    shape:Shape={
        head:"头",
        arm:"金箍棒"
    }
    say(){
        console.log("xx")
    };


}
const aaa:number=1;

class Teacher implements Human{
  readonly  name: string="老师";
    age: number=123;
    gender: string="男";
    shape:Shape={
        head:"头",
        arm:"金箍棒"
    }
    say(): void {
        throw new Error("Method not implemented.");
    }

}
//接口对对象进行规范
let obj2:Human={
   name:"张三",
   age:18,
   gender:"男",
   say:function(){

   }
}


interface Fn{
    (a:number,b:number):number;
    (a:number,b:number):number;

}

import name5,{API,name2,name3} from "./08.命名空间"

console.log(API.obj,name2,name3,name5)