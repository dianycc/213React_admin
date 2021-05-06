
import React, { Component } from 'react'
import {
    Form,
    Input,
} from 'antd'
const Item=Form.Item
//更新分类的组件
export default class UpdateForm extends Component {
    state={categoryName:''}
    getDerivedStateFromProps(props){
        this.setState({categoryName:this.props.categoryName})
    }
    
    render() {
        const {categoryName}
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
