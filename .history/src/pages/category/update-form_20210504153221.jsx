
import React, { Component } from 'react'
import {
    Form,
    Input,
} from 'antd'
const Item=Form.Item
//更新分类的组件
export default class UpdateForm extends Component {
    state={categoryName:''}
    componentWillMount(){
        this.setState({categoryName:this.props.categoryName})
    }
    componentWillUnmount(){
        this.setState({categoryName:''})
    }
    render() {
        const {categoryName}=this.state
        return (
            <Form>
                <Item
                    name="categoryName"
                    initialValue={categoryName}
                >
                    <Input placeholder="请输入分类名称" />
                </Item>
            </Form>
        )
    }
}
