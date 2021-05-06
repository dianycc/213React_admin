
import React, { Component } from 'react'
import {
    Form,
    Select,
    Input,
} from 'antd'
const Item=Form.Item
const Option=Select.Option
//更新分类的组件
export default class UpdateForm extends Component {
    render() {
        return (
            <Form>
          

                <Item
                    name="categoryName"
                    initialValue=''
                >
                    <Input placeholder="请输入分类名称"/>
                </Item>
            </Form>
        )
    }
}
