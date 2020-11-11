let a:number=123;
let b:string = "123"
let c:boolean = true;
let d:undefined = undefined; //未定义
let e:null = null   //定义了，值是null
//声明数组的两种写法  ts的数组是单一类型   类型<泛型>
//第一种就是  类型[]
//第二种就是 Array<泛型>  泛型在ts中用的非常多
let f:number[] = [1,2,3];
let g:Array<number> =[1,22,33]
let h:Array<string> = ["a","b","c"]
let sentence: string = `Hello, my nickname is ${ b }`

//元祖  可以存放不同类型的数据
let i:[string,number,boolean]=["你好",11,true];
i =["ss",11,false]



//object类型
let j:object={}
j=new String("123")
// j=123  //123类型是number  //j的类型是number  基本数据类型

j=new Number(123)        //j的类型是Number      基本数据类型的包装类型
//类型推导：程序员自己很清楚当前js就是Number类型，程序员就可以通过类型推导的方式来调用Number类型的方法
// <类型>值  类型推导
let str =(<Number>j).toString()
let str2 = (j as Number).toString


//any类型  任意类型，他的值可以任意
let k:any ="123";
 k=new String("333");
 k={}



 //void类型表示没有类型，它的值只能够是undefined 一般情况下在函数返回值中

 let l:void=undefined
//生命一个类方法，有一个参数是name(值必须是string)，他的返回值是void
//在函数没有返回值的时候，可以不return ，可以return  undefined
 function say(name:string):void {
     
 }


 //never类型
 let m:never;
//  m=(()=>{throw new Error("xxx")})();


 //枚举类型
 enum Color {Red,Green,Blue}
 let color=Color.Green;
 console.log(color,"xxx")
 enum Gender {male,female}
 let gender = Gender.male;
enum Huase {hongtao,heitao,fangpian,meihua}
let se = Huase.hongtao


//var 声明的变量 作用域 全局作用域和函数作用域
var  a1=1;
var  a1=2;

function test() {
    var b ="111"
    
}
//用let 声明的变量除了上面的全局作用域之外，还有块级作用域 。块级作用域{}

{
    let a2 = 1
}
{
    let a2 = 1
}

//用const声明的变量又叫做常量，不可修改(指的是不可以修改变量的内存地址)
const b1 ="11"
const obj = {
    name:"zs"
}
obj.name="list"

