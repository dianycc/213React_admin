import React, { Component } from 'react'
//登入路由的组件
import './login.less'
import logo from "./images/logo.png"
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="log"/>
                </header>
                <section className="login-content"></section>
            </div>
        )
    }
}
