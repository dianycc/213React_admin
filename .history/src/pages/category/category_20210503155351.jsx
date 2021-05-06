import React, { Component } from 'react'
import {Card,Table, Button} from "antd"
import {PlusOutlined} from "'@ant-design/icons';"
//首页路由
export default class Category extends Component {
    render() {
        //card 的左侧
        const title='一级分类列表'
        //card的右侧
        const extra=(
            <button>
                <PlusOutlined />
                添加
            </button>
        )
        return (
            <Card title={title} extra={extra} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
        )
    }
}
