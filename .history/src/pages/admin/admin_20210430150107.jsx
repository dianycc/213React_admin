import React, { Component } from 'react'
import memoryUtils from "../../utils/memoryUtils"
export default class Admin extends Component {

    render() {
        const user=memoryUtils.user
        //如果内存中没有存储user
        if(!user || !user._id)
        return (
            <div>
                Hello
            </div>
        )
    }
}
