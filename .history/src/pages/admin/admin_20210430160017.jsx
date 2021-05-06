import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { Layout } from 'antd';
//引入存储数据的引入模块使用它内部数据
import memoryUtils from "../../utils/memoryUtils"
import 
const { Header, Footer, Sider, Content } = Layout;
export default class Admin extends Component {

    render() {
        const user = memoryUtils.user
        //如果内存没有存储user==>当前没有登入
        if (!user || !user._id) {
            //判断是否有数据以及是否有id 没有的话则跳转登入页面
            //自动跳转到登入(在render()中)
            //利用Redirect 自动跳转到login 
            return <Redirect to='/login' />
        }
        return (
            <Layout style={{height:"100%"}}>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}
