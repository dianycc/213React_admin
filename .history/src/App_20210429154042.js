import React, { Component } from 'react'
import { Button } from 'antd';

export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.}>Primary Button</Button>
            </div>
        )
    }
}
