import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Menu } from 'antd';
import {
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons';
import logo from "../../assets/images/logo.png"
import menuList from "../../config/menuConfig"
import "./index.less"
const { SubMenu } = Menu;
//左侧导航组件



export default class LeftNav extends Component {
    render() {
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt="logo" />
                    <h1>后台硅谷</h1>
                </Link>
                <Menu
                    mode="inline"
                    theme="dark"
                >
                {/*                  
                    <Menu.Item key="/home" icon={<PieChartOutlined />}>
                        <Link to="/home">首页</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="/category" icon={<MailOutlined />}><Link to="/category">品类管理</Link></Menu.Item>
                        <Menu.Item key="/product" icon={<MailOutlined />}><Link to='/product'>商品管理</Link></Menu.Item>
                    </SubMenu> 
                */}
                </Menu>
            </div>
        )
    }
}
