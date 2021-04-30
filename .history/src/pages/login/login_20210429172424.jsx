import React, { Component } from 'react'
//登入路由的组件
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from "./images/logo.png"
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="log" />
                    <h1>React项目:后台管理的</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }}onFinish={onFinish}>
                    <Form.Item></Form.Item>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                        <Button type="primary" htmlType="submit" className="login-form-button"> Log in</Button>
                    </Form>
                </section>
            </div>
        )
    }
}
