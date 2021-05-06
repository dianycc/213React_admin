/* 
能发送异步请求的Ajax的请求函数模块
封装axios库
函数的返回值为promise对象
*/
import axios from "axios"
//传入发请求的3个参数  url  data指定默认值如果用不到的话 type默认get
export default function ajax(url,data={},type="GET"){
    if(type==='GET'){//发送get请求
        return axios.get(url,{//配置对象
            params:data //指定请求参数
        })
    }else{//发送post请求
        return axios.post(url,data)
    }
}

//请求登入接口 调用ajax('/login',{username:'})