import React, { Component } from 'react'
import { Button } from 'antd';

export default class App extends Component {
    handleClick=()=>{
        
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>Primary Button</Button>
            </div>
        )
    }
}
