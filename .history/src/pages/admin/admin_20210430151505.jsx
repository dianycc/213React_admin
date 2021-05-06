import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
//引入存储数据的引入模块使用它内部数据
import memoryUtils from "../../utils/memoryUtils"
export default class Admin extends Component {

    render() {
        const user=memoryUtils.user
        //如果内存中没有存储user
        if(!user || !user._id){
            //判断是否有数据以及是否有id 
            //自动跳转到登入(在render()中)
            return <Redirect to='/login'/>
        }
        return (
            <div>
                Hello{user.username}
            </div>
        )
    }
}
