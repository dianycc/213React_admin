import React, { Component } from 'react'
import { Link ,withRouter} from "react-router-dom"
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



class LeftNav extends Component {
    getMenuNodes_map=(menuList)=>{
        //根据menu的数据数组生成对应的标签数组
        //使用mep()+递归调用 在函数里面再次调用函数
        return menuList.map(item=>{
            if(!item.children){
                return(
                    <Menu.Item key={item.key}>
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
    //使用reduce +递归调用在函数里面调用
    getMenuNodes=(menuList)=>{
        return menuList.reduce((pre,item)=>{
            //向pre添加<Menu.item>
            if(!item.children){
                pre.push((
                    <Menu.Item key={item.key}>
                    <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                ))
            }else{
            //向pre添加<Submenu>
                pre.push((
                    <SubMenu key={item.key}  title={item.title}>
                    {this.getMenuNodes(item.children)}
                    </SubMenu> 
                ))
            }
            return pre
        },[])
    }

    render() {
        const path=this.props.location.pathname
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt="logo" />
                    <h1>后台硅谷</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={[path]}
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

//withRouter 高阶组件:
//bao'z
export default withRouter(LeftNav)