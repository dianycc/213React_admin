import React, { Component } from 'react'
//登入路由的组件
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from "./images/logo.png"
import {reqLogin} from '../../api'
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
        const onFinish =async (values) => {
            //校验成功 新版本只能接受到一个values值了不能判定校验失败是否 不过只要表单验证不通过就不让你提交
            // if(!err){
            //     console.log("校验失败")
            // }else{
            //     console.log('提交登入的Ajax请求',values)
            // }
            const {username,password}=values
                const response=await reqLogin(username,password)
                console.log('请求成功',response.data)
                const result=response.data //{status:0,data:user}{status:1,msg:'XXX'}
                if(result.)
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

/* 
1. 前台表单验证
2 手机表单输入数据
*/
/* 
async 和await作用
1 作用?
    简化promis对象使用 :不用在使用.then()来制定成功/失败的回调函数
    以同步编码(没有回调函数了)方式实现异步流程
2 那里写await
    在返回promise的表达式左侧写await: 不想用promise ,想要promise异步执行成功的value数据
3那里写async
    await所在函数(最近的)定义的左侧 写async
*/