import React, { Component } from 'react'
import {BrowserRouter,Route} from "react-router-dom"
//传入app中间件less 要什么样式就给什么样式
import './App.less'
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route path='./' component={Login}></Route>
                <Route path='/admin' component={Admin}></Route>
            </BrowserRouter>
        )
    }
}
