import React, { Component } from 'react'
//左侧导航组件
import {formateDate} from '../../utils/dateUtils'
import './index.less'
export default class Header extends Component {
    state={
        currentTime:formateDate(Date.now()),//当前时间字符串
        province:'' ,//地点
        weather:'', //天气文本
    }
    render() {
        const{currentTime,province,weather}=this.state
        return (
            <div className='header'>
                <div className="header-top">
                    <span>欢迎,admin</span>
                    <a href='javascript:'>退出</a>
                </div>
                <div className='header-bottom'>
                    <div className="header-bottom-left">
                        首页
                    </div>
                    <div className='header-bottom-right'>
                        <span>{currentTime}</span>
                        <span>{province}</span>
                        <span>晴</span>
                    </div>
                </div>
            </div>
        )
    }
}
