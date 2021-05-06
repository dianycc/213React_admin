import { ReactComponent } from "*.svg";

import React, { Component } from 'react'
import {
    Form,
    Select,
    Input,
} from 'antd'
const Item=Form.Item
const Option=Select.Option

export default class AddForm extends Component {
    render() {
        return (
            <Form>
                <Select>
                    <Option value='0'>一级分类</Option>
                    <Option value='0'>电脑</Option>
                    <Option value='0'>a</Option>
                </Select>
            </Form>
        )
    }
}
