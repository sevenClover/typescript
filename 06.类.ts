//class是声明类的关键字
class Person {

    //属性、成员变量  一定要通过变量来访问
    name: string = "zs";
    age: number;
    //加private修饰的变量是私有的成员变量  只能够在当前类内部使用
    private _house: string = "汤臣一品"
    //加protected修饰的变量是私有的成员变量 只能够在当前类和当前子类中使用
    protected car: string = "保时捷"
    //私有成员变量_house的setter和getter方法
    //好处是提供了间接访问私有成员的变量_house的方式
    //set是给私有变量赋值

    set house(house: string) {
        this._house = house
    }
    //get是获取私有变量赋值
    get house(): string {
        return this._house
    }
    //构造函数：创建对象会默认调用的方法
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    //静态变量：不需要创建对象，可以直接通过类名来访问
    static counter:string="中国"
    //静态方法：不用创建对象，可以通过类名来创建
    static test(){
        console.log("这是一个静态方法")
    }
    //成员方法   一定要通过对象来调用
    sayHello(msg: string = "默认消息"): void {
        console.log(this.name + msg)
    }
}
var p = new Person("李四", 123)
p.sayHello()
console.log(p.name)
Person.test()

//声明一个Student类继承Person类 :孩子继承父亲之后就自动拥有父亲非私有的成员信息
class Student extends Person {
    gender: string;
    constructor(name: string, age: number, gender: string) {
        //调用父亲的构造函数初始化name和age的信息
        //当子类继承父类的时候，在构造函数中super是第一个出现的信息

        super(name, age)
        //初始化自己的gender信息
        this.gender = gender;
    }
    //重写父亲的sayHello方法
    sayHello(msg: string = "默认消息"): void {
        //调用父亲的sayHello()方法
        super.sayHello();
        //打印孩子自己的性别信息
        console.log("当前性别是", this.gender, this.car)
    }
}

var stu = new Student("学生", 111, "男")
stu.house = "希尔顿"
stu.sayHello()
console.log(stu.house)
