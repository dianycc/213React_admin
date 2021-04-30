import React, { Component } from 'react'
import {BrowserRouter,Route} from "react-router-dom"
//传入app中间件less 要什么样式就给什么样式
import './App.less'
export default class App extends Component {
    handleClick=()=>{
        message.success('成功了');
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>测试antd</Button>
            </div>
        )
    }
}
