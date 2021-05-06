import React  from 'react'
import "./index.less"

/* 外层想链接的按钮 */
export default function LinkButton(props){
    return (
            <button {...props} className="link-button"></button>
    )
    
}
