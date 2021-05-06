
import React, { Component } from 'react'
import {
    Form,
    Input,
} from 'antd'
const Item=Form.Item
//更新分类的组件
export default class UpdateForm extends Component {
    render() {
        const {categoryName}=this.props
        return (
            <Form>
                <Item
                    name="categoryName"
                    initialValues={categoryName}
                >
                    <Input placeholder="请输入分类名称"/>
                </Item>
            </Form>
        )
    }
}
