import React, { Component } from 'react'
//左侧导航组件
import './index.less'
export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="header-top">
                    <span>欢迎,admin</span>
                    <a href='javascript:'>退出</a>
                </div>
                <div className='header-bottom'>
                    <div className="header-bottom-left">
                        
                    </div>
                </div>
            </div>
        )
    }
}
