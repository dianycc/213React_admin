import React, { Component } from 'react'
import memoryUtils from "../../utils/memoryUtils"
export default class Admin extends Component {

    render() {
        const user=memoryUtils.user
        if(!user || !user._id)
        return (
            <div>
                Hello
            </div>
        )
    }
}
