import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
//左侧导航组件
import "./index.less"

import logo from "../../assets/images/logo.png"
export default class LeftNav extends Component {
    render() {
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt="logo" />
                    <h1>后台硅谷</h1>
                </Link>
            </div>
        )
    }
}
