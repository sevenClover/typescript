//xx.d.ts  就是声明文件，我们主要在这个文件中声明类型

//声明一个类型 StringFunc ， 该函数没有入参，返回值是string
declare type StringFunc = () => string;


//声明一个命名空间
declare namespace API2 {
    //导出CurrentUser接口类型
    export interface CurrentUser {
      avatar?: string;
      name?: string;
      title?: string;
    }
  }