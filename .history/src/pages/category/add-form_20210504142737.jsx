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
                    <Option value>a</Option>
                </Select>
            </Form>
        )
    }
}
