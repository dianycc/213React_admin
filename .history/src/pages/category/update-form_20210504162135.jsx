
import React, { Component } from 'react'
import {
    Form,
    Input,
} from 'antd'
const Item=Form.Item
//更新分类的组件
export default class UpdateForm extends Component {

    get

    render() {
        const {categoryName} =this.props
        console.log(this.props)
        return (
            <Form
            onFinish
            >
                <Item
                    name="categoryName"
                    initialValue={categoryName}
                >
                    <Input placeholder="请输入分类名称" onChange={this.getInput}/>
                </Item>
            </Form>
        )
    }
}
