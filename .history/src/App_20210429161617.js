import React, { Component } from 'react'
import {BrowserRouter,Route} from "react-router-dom"
//传入app中间件less 要什么样式就给什么样式
import './App.less'
import Login from "./pages/login/login"
import Admin from "./pages/login/"

export default class App extends Component {
    handleClick=()=>{
        message.success('成功了');
    }
    render() {
        return (
            <BrowserRouter>
                <Route path='/login' component={Login}></Route>
                <Route path='/login' component={Admin}></Route>
            </BrowserRouter>
        )
    }
}
