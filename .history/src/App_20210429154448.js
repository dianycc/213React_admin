import React, { Component } from 'react'
import { Button,message} from 'antd';
import './App.css'
export default class App extends Component {
    handleClick=()=>{
        message.success('成功了');
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>测试antd</Button>
            </div>
        )
    }
}
