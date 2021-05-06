import React, { Component } from 'react'
import {Card,Table, Button} from "antd"
import {PlusOutlined} from '@ant-design/icons';
//首页路由
export default class Category extends Component {
    render() {
        //card 的左侧
        const title='一级分类列表'
        //card的右侧
        const extra=(
            <Button type='primary'>
                <PlusOutlined />
                添加
            </Button>
        )
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
          ];
          
          const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ];
        return (
            <Card title={title} extra={extra} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
        )
    }
}
