//进行local数据存储管理的工具模块
comst USER_KEY=
export default{
    //保存user操作
    saveUser(user){
        localStorage.setItem('user_key',JSON.stringify(user))
    },
    //读取user操作
    getUser(){
        return JSON.parse(localStorage.getItem('user_key')|| '{}')
    },
    //删除user操作
    removeUser(){
        localStorage.removeItem('user_key')
    }
}