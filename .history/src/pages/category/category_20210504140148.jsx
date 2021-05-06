import React, { Component } from 'react'
import { Card, Table, Button, message } from "antd"
import { PlusOutlined ,ArrowRightOutlined} from '@ant-design/icons';
import LinkButton from "../../components/link-button"
//引入接口请求函数的
import {reqCategorys} from '../../api'
//首页路由
export default class Category extends Component {

    state={
        loading:false,//是否正在获取数据中
        categorys:[], //一级分类列表
        subCategorys:[],//二级分类列表
        parentId:'0',//当前需要显示的分类列表的父类ID
        parentName:'',//当前需要显示的分类列表的父类名称
    }
    
    //初始化table 所有列的数组
    initColumns=()=>{
        this.columns = [
            {
                title: '分类的名称', //表头名称
                dataIndex: 'name', //执行显示数据对应的属性名
            },
            {
                width:300,//宽300
                title: '操作',
                render: (category) => ( //每一行都有数据对象把参数传给进球
                     //返回需要显示的界面标签 下面LinkButton自定义的组件
                    <span>
                        <LinkButton>修改分类</LinkButton>
                        {/* 如何向事件的回调函数传递参数:先定义一个匿名函数,在函数调用处理的函数传入数据 判断parentid是否为0 来设置下面查看*/}
                        {this.state.parentId==='0'?<LinkButton onClick={()=>{this.showSubCategorys(category)}}>查看子分类</LinkButton>:null}
                        
                    </span>
                ),

            },
        ];
    }

    //异步获取一级分类列表显示或者二级列表
    getCategorys=async ()=>{
        //在发送请求前,显示loading
        this.setState({loading:true})

        const {parentId}=this.state

        //发布异步ajax请求获取数据
        const result=await reqCategorys(parentId)
        //在请求以后隐藏loading
        this.setState({loading:false})

        if(result.status===0){
            //取出分类数组数据(可能是一级的 也可能是二级的)

            const categorys=result.data
            if(parentId==='0'){
                //更新一级分类状态状态
                this.setState({categorys})
            }else{
                this.setState({subCategorys:categorys})
            }
            
        }else{
            message.error('获取一级列表失败')
        }
    }
    //获取一级分类对象的二级子列表
    showSubCategorys=(category)=>{
        //更新状态
        this.setState({ //是个异步的更新状态
            parentId:category._id,
            parentName:category.name,
        },()=>{ //在状态更新且重新render()后执行
            //获取二级分类列表显示
            this.getCategorys()//这时候获取id为点击那个id了
        }) 
        //setState() 不能立即获取最新的状态:因为setState()是异步更新状态的

    }
    //显示指定一级分类列表
    showCategorys=()=

    //为第一次render()准备数据
    UNSAFE_componentWillMount(){
        this.initColumns()
    }
    //执行异步任务:发异步Ajax请求
    componentDidMount(){
        //获取一级分类列表显示
        this.getCategorys()
    }

    render() {
        //读取状态数据
        const {categorys,loading,subCategorys,parentId,parentName}=this.state

        //card 的左侧
        const title =parentId==='0'? '一级分类列表':(
        <span>
            <LinkButton onClick={showCategorys}>一级分类列表</LinkButton>
            <ArrowRightOutlined  style={{marginRight:5}}/>
            <span>{parentName}</span>
        </span>)
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
                loading={loading}
                rowKey='_id'
                dataSource={parentId==='0'?categorys:subCategorys} 
                columns={this.columns} 
                pagination={{defaultPageSize:5,showQuickJumper:true}}
                />;
            </Card>
        )
    }
}
