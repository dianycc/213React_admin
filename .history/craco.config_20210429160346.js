const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
        { //设置less配置
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        //设置主题样式
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};