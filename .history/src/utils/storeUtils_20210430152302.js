//进行local数据存储管理的工具模块

export default{
    //保存user操作
    saveUser(user){
        localStorage.setItem('user_key',JSON.stringify(user))
    },
    //读取user操作
    getUser()
    //删除user操作
}