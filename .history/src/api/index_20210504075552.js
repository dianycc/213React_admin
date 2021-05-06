/* 
要求:根据结构稳定定义请求
包含应用中所有接口请求的函数模块
每个函数的返回值都是promise
*/

/* 
基本要求:能根据接口文档定义接口函数
*/
import jsonp from "jsonp"
import {message} from "antd"
import ajax from "./ajax"

//const BASE='http://localhost:3000'
const BASE="http://120.55.193.14:5000"
//登入
/* export function reqLogin(username,password){
    ajax('/login',{username,password},"POST")
} */
export const reqLogin=(username,password)=>ajax(BBB+'/login',{username,password},'POST')

//添加用户
export const reqAddUser=(user)=>ajax(BBB+'/manage/user/add',user,'POST')

//获取一级/二级分类的列表
export const reqCategorys=(parentId)=>ajax(BBB+'/manage/category/list',{parentId})
//添加分类
export const reqAddCategory=(categoryName,parentId)=>ajax(BBB+'/manage/category/add',{categoryName,parentId},'POST')
//更新分类
export const reqUpdateCategory=({categoryId,categoryName})=>ajax(BBB+'/manage/category/update',{categoryId,categoryName},'POST')


/* 
jsonp 请求的接口函数
 */
export const reqWeather=(city)=>{
    return new Promise((resolve,reject)=>{
        const url=`https://restapi.amap.com/v3/weather/weatherInfo?key=bed4b90d53b444e975f5aa63df5ac564&city=110101`
        //发送jsonp请求
        jsonp(url,{},(err,data)=>{
           // console.log("jsonp()",err,data)
            //如果成功
            if(!err && data.status==="1"){
                const {province,weather}=data.lives[0]
                resolve({province,weather})
            }else{
                message.error('获取天气信息失败!')
            }
            //如果失败
        })
    })

}
//reqWeather(110101)
