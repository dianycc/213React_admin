import React, { Component } from 'react'
//登入路由的组件
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from "./images/logo.png"
export default class Login extends Component {
    
    render() {
        const onFinish = (values: any) => {
            console.log('Received values of form: ', values);
        };
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="log" />
                    <h1>React项目:后台管理的</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }}  onFinish={onFinish}>
                    <Form.Item
                    name="username"
                    //rules配置表单验证选项以及提示信息
                    /*
                        用户名/密码合法要走
                        1必须输入
                        2必须大于4
                        3必须小于12
                        必须英文数字或下划线组成
                    */
                    rules={[
                        { required: true, message: '用户名必须输入' },
                        { min: 4, message: '用户名至少4位' },
                        { max: 12, message: '用户名最多12位' },
                        {pattern:/^[a-zA-Z]$/,message:"22"},
                    ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                    <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码"/>
                        </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登入</Button>
                    </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
