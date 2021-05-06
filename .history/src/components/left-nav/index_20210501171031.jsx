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
        //得到当前请求的路由路径
        const path=this.props.location.pathname
        return menuList.reduce((pre,item)=>{
            //向pre添加<Menu.item>
            if(!item.children){
                pre.push((
                    <Menu.Item key={item.key}>
                    <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                ))
            }else{
                //查找一个与当前路径请求的子Item
                const Citem=item.children.find(cItem=>cItem.key===path)
                //如果存在说明当前item子列表需要打开
                this.openkey=item.key
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
    componentWillMount

    render() {
        const menuNodes=this.getMenuNodes(menuList)
        //得到当前请求的路由路径
        const path=this.props.location.pathname
        //得到需要打开惨淡想的key
        const openKey=this.openkey
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt="logo" />
                    <h1>后台硅谷</h1>
                </Link>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={['/charts']}
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
                {
                menuNodes
                }
                </Menu>
            </div>
        )
    }
}

/* withRouter 高阶组件:
包装非路由组件 
新的组件想非路由组件传递3个信息 history location match
*/
export default withRouter(LeftNav)