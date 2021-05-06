/* 
能发送异步请求的Ajax的请求函数模块
封装axios库
函数的返回值为promise对象
1优化:统一梳理请求异常
*/
import axios from "axios"

//传入发请求的3个参数  url  data指定默认值如果用不到的话 type默认get
export default function ajax(url,data={},type="GET"){
    return new Promise((resolve,reject)=>{
        //1执行异步ajax
    })
    if(type==='GET'){//发送get请求
        return axios.get(url,{//配置对象
            params:data //指定请求参数
        })
    }else{//发送post请求
        return axios.post(url,data)
    }
}

// //请求登入接口 调用ajax('/login',{username:'222',password:"123"}) 
// ajax("/login",{username:'tom',password:'12345'},'POST').then()
// //添加用户接口
// ajax("/manage/user/add",{username:'tom',password:'12345',phone:'13121551211'},'POST').then()