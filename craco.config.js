const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
        { //设置less配置
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        //设置主题样式 对源码中的less 修改主题颜色
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};