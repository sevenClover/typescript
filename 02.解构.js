"use strict";
{
    var mobj = {
        name: "张三",
        dog: {
            name: "大黑",
        },
        gender: "男",
    };
    var name_1 = mobj.name, dname = mobj.dog.name, gender_1 = mobj.gender;
    console.log(name_1, dname, gender_1);
}
{
    var arr = [{ name: "张三" }, { name: "李四" }, { name: "王五" }];
    var obj1 = arr[0], obj2 = arr[1], obj3 = arr[2];
    var name1 = arr[0].name, name2 = arr[1].name, name3 = arr[2].name;
    console.log(obj1, obj2, obj3);
    console.log(name1, name2, name3);
}
{
    //解构剩余参数：
    //rest剩余参数 包含了除first之外的其他所有参数
    var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
    console.log(first); // 1
    console.log(rest); // [2, 3, 4]
}
