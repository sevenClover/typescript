//值需要导出，类不需要
export namespace API{
    export let obj={
        name:"哈哈"
    }
} 

//导出普通成员  引入的时候需要import {name3，name4} from './xx' 注意名字要和导出的名字一致
export let name2="小黑"
export  let name3="小黑"
let name5="小红"

//导出默认成员  引入的时候需要 import xx from './xx' 名字可以任意
export default name5
console.log(API.obj)