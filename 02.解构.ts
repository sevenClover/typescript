{
    let mobj={
        name:"张三",
        dog:{
            name:"大黑",
        },
        gender:"男",
    }


    let  {name,
        dog:{name :dname}  //解构mobj对象里面的dog对象里面的name   这边的冒号表示取别名
    ,gender}=mobj
    console.log(name,dname,gender)
}

{
    let arr=[{name:"张三"},{name:"李四"},{name:"王五"}]
    let [obj1,obj2,obj3]=arr;
    let [{name:name1},{name:name2},{name:name3}]=arr;
    console.log(obj1,obj2,obj3)
    console.log(name1,name2,name3)

}
{
    //解构剩余参数：
    //rest剩余参数 包含了除first之外的其他所有参数
let [first, ...rest] = [1, 2, 3, 4]
console.log(first) // 1
console.log(rest) // [2, 3, 4]
}
