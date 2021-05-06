/* 
要求:根据结构稳定定义请求
包含应用中所有接口请求的函数模块
每个函数的返回值都是promise
*/
import jsonp from "jsonp"
import ajax from "./ajax"

const BASE='http://localhost:3000'
//登入
/* export function reqLogin(username,password){
    ajax('/login',{username,password},"POST")
} */
export const reqLogin=(username,password)=>ajax(BASE+'/login',{username,password},'POST')

//添加用户
export const reqAddUser=(user)=>ajax(BASE+'/manage/user/add',user,'POST')

/* 
jsonp 请求的接口函数
 */
export const reqWeather=(city)=>{
    const url=`https://restapi.amap.com/v3/weather/weatherInfo?key=bed4b90d53b444e975f5aa63df5ac564&city=${city}`
    jsonp(url,{},(err,data)=>{
        console.log("jsonp(",err,data)
    })
}
reqWeather(110101)
