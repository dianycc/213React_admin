// 入口js
import React from "react"
import reactDOM from "react-dom"
import App from "./App"
import localStorage from "./utils/"
//读取local保存的user
// 将app引入到文件中渲染
reactDOM.render(<App/>,
    document.getElementById("root")
    )