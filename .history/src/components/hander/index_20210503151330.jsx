import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {reqWeather} from "../../api"
import menuList from "../../config/menuConfig"
import {formateDate} from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import './index.less'
//左侧导航组件
class Header extends Component {
    state={
        currentTime:formateDate(Date.now()),//当前时间字符串
        province:'' ,//地点
        weather:'', //天气文本
    }

    getTitle=()=>{
        const path=this.props.location.pathname
        let title
        menuList.forEach(item=>{
            if(item.key===path){ //如果当前item对象key与path匹配一样,tiem的title就是需要显示的title
                title=item.title
            }else if(item.children){
                //在所有的子item中查找匹配的
                const cItem=item.children.find(cItem=>cItem.key===path)
                //如果有值则说明有陪陪的
                if(cItem){
                    //取出他的title
                    title=cItem.title
                }
            }
        })
        return title
    }
    
    //退出登入
    logout=()=>{
        
    }
    
    getTime=()=>{
        //每隔1s获取当前时间,并更新当前状态数据
        setInterval(()=>{
            const currentTime=formateDate(Date.now())
            this.setState({currentTime})
        },1000)
    }
    getWeather=async()=>{
        //调用接口请求异步获取数据
        const {province,weather}=await reqWeather(110101)
        //更新状态
        this.setState({province,weather})
    }
    /* 
        第一次render()之后执行一次
        一般在此执行异步操作 :发Ajax请求 /启动定时器
    */
    componentDidMount(){
        //获取当前时间
        this.getTime()
        //获取当前天气
        this.getWeather()
    }
    render() {
        const{currentTime,province,weather}=this.state
        const username=memoryUtils.user.username

        //取出得到当前显示的title
        const title=this.getTitle()
        return (
            <div className='header'>
                <div className="header-top">
                    <span>欢迎,{username}</span>
                    <a href='javascript:' onClick={this.logout}>退出</a>
                </div>
                <div className='header-bottom'>
                    <div className="header-bottom-left">
                        {title}
                    </div>
                    <div className='header-bottom-right'>
                        <span>{currentTime}</span>
                        <span>{province}</span>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)
