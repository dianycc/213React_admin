import React, { Component } from 'react'
//登入路由的组件
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from "./images/logo.png"
export default class Login extends Component {
    
    /* 
    对密码进行自定义验证
    */
    /*
        用户名/密码合法要走
        1必须输入
        2必须大于等于4
        2必须小于等于12
    须英文数字或下划线组成
     */
    validataPwd=(rule, value,callback)=>{
        //console.log("validataPwd",rule,value)
        if(!value){
            callback('密码必须输入')
        }else if(value.length<4){
            callback('密码长度不能小于4')
        }else if(value.length>12){
            callback('密码长度不能大于12')
        }else if(!/^[a-zA-Z0-9]+$/.test(value)){
            callback('用户名必须英文数字或下划线组成')
        }else{
            callback()//验证成功
        }
        //callback(xxx)表示失败
    }
    render() {
        const onFinish = (err,values) => {
            //校验成功
            if(!err){
                console.log("校验失败")
                console.log('提交登入的Ajax请求',values)
            }else{
    
            }
            
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
                        //声明式验证:直接使用别人定义好的验证规则进行验证 
                        //witespace:true 如果字段仅包含空格则校验不通过
                        { required: true, whitespace:true,message: '用户名必须输入' },
                        { min: 4, message: '用户名至少4位' },
                        { max: 12, message: '用户名最多12位' },
                        {pattern:/^[a-zA-Z0-9_]+$/,message:"用户名必须英文数字或下划线组成"},
                    ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                    <Form.Item
                    name="password"
                    rules={[
                        {validator:this.validataPwd},
                    ]}
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
