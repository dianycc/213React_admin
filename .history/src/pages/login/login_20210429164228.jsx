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
                    <h1>React项目:后台管理的</h1>
                </header>
                <section className="login-content">
                    <h2></h2>
                </section>
            </div>
        )
    }
}
