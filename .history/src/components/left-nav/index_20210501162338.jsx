import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Menu } from 'antd';
// import {
//     AppstoreOutlined,
//     HomeOutlined,
// } from '@ant-design/icons';
import logo from "../../assets/images/logo.png"
import menuList from "../../config/menuConfig"
import "./index.less"
const { SubMenu } = Menu;
//左侧导航组件



export default class LeftNav extends Component {
    getMenuNodes=(menuList)=>{
        //根据menu的数据数组生成对应的标签数组
        //使用mep()+递归调用
        return menuList.map(item=>{
            if(!item.children){
                return(
                    <Menu.Item key={item.key} >
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            }else{
                return(
                    <SubMenu key={item.key}  title={item.title}>
                    {this.getMenuNodes(item.children)}
                    </SubMenu> 
                )
            }
        
        })
    }
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
                {this.getMenuNodes(menuList)}
                </Menu>
            </div>
        )
    }
}
