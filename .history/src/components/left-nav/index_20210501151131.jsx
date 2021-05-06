import React, { Component } from 'react'
import {Link} from "react-router-dom"
//左侧导航组件
import "./index.less"
import logo from "../../assets/images/logo.png"
export default class LeftNav extends Component {
    render() {
        return (
            <Link to='/' className='left-nav'>
                <header className='left-nav-header'>
                    <img src={logo} alt="logo"/>
                    <h1>后台硅谷</h1>
                </header>
            </Link>
        )
    }
}
