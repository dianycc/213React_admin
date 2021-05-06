import React, { Component } from 'react'
import { Card, Table, Button } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import LinkButton from "../../components/link-button"
//首页路由
export default class Category extends Component {

    state={
        categorys:[], //一级分类列表
    }
    
    //初始化table 所有列的数组
    initColumns=()=>{
        this.columns = [
            {
                title: '分类的名称',
                dataIndex: 'name', //执行显示数据对应的属性名
            },
            {
                width:300,
                title: '操作',
                render: () => (  //返回需要显示的界面标签
                    <span>
                        <LinkButton>修改分类</LinkButton>
                        <LinkButton>查看子分类</LinkButton>
                    </span>
                ),

            },
        ];
    }

    UNSAFE_componentWillMount(){
        this.initColumns()
    }

    componentDidMount()

    render() {
        //读取状态数据
        const {categorys}=this.state

        //card 的左侧
        const title = '一级分类列表'
        //card的右侧
        const extra = (
            <Button type='primary'>
                <PlusOutlined />
                添加
            </Button>
        )

        return (
            <Card title={title} extra={extra} >
                <Table 
                bordered
                rowKey='_id'
                dataSource={categorys} columns={this.columns} />;
            </Card>
        )
    }
}
