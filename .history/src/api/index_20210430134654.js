/* 
包含应用中所有接口请求的函数模块
*/
import ajax from "./ajax"
//登入
/* export function reqLogin(username,password){
    ajax('/login',{username,password},"POST")
} */
export const reqLogin=(username,password)=>ajax('/login',{username,password},'POST')

//添加用户
export const reqAddUser=()=>ajax('/manage/user/add',user,'POST')

