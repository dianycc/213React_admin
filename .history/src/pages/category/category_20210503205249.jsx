import React, { Component } from 'react'
import { Card, Table, Button } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import LinkButton from "../../components/link-button"
//首页路由
export default class Category extends Component {
    render() {
        //card 的左侧
        const title = '一级分类列表'
        //card的右侧
        const extra = (
            <Button type='primary'>
                <PlusOutlined />
                添加
            </Button>
        )
        const dataSource = [
            {
            "_id": "5e12b8bce31bb727e4b0e348"
            ,
            "parentId": "0",
            "name": "家用电器",
            "__v": 0
            }, 
            {
            "_id":  "5e130e60e31bb727e4b0e34b"
            ,
            "parentId": "0",
            "name": "手机",
            "__v": 0
            }, 
        {
            "_id":  "5e130ec7e31bb727e4b0e34c"
            ,
            "parentId": "0",
            "name": "洗衣机",
            "__v": 0
        }, {
            "_id":  "5e1346533ed02518b4db0cd7"
            ,
            "parentId": "0",
            "name": "图书",
            "__v": 0
        }, {
            "_id": "5e13467e3ed02518b4db0cd8"
            ,
            "parentId": "0",
            "name": "杯具",
            "__v": 0
        }, {
            "_id":  "5e1346c83ed02518b4db0cd9"
            ,
            "parentId": "0",
            "name": "纸",
            "__v": 0
        }, {
            "_id":  "5e144dc7297c1138787e96ab"
            ,
            "parentId": "0",
            "name": "服装",
            "__v": 0
        },
        ]

        componentDid
        return (
            <Card title={title} extra={extra} >
                <Table 
                bordered
                rowKey='_id'
                dataSource={dataSource} columns={columns} />;
            </Card>
        )
    }
}
