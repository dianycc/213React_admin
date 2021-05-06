import React, { Component } from 'react'
import { Card, Table, Button, message } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import LinkButton from "../../components/link-button"
//引入接口请求函数的
import {reqCategorys} from '../../api'
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

    //异步获取一级分类列表显示
    getCategorys=async ()=>{
        //发布异步ajax请求获取数据
        const result=await reqCategorys('0')
        if(result.status===0){
            const categorys=result.data
            //更新状态
            this.setState({categorys})
        }else{
            message.error('获取一级列表失败')
        }
    }

    //为第一次render()准备数据
    UNSAFE_componentWillMount(){
        this.initColumns()
    }
    //执行异步任务:发异步Ajax请求
    componentDidMount(){
        this.getCategorys()
    }

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
                dataSource={categorys} 
                columns={this.columns} 
                pagination={{defaultPageSize:5,}}
                />;
            </Card>
        )
    }
}
