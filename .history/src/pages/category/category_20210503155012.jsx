import React, { Component } from 'react'
import {Card,Table, Button} from "antd"
//首页路由
export default class Category extends Component {
    render() {
        const title=
        return (
            <Card title={title} extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
        )
    }
}
