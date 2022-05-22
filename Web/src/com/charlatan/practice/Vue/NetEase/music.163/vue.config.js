const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 指定main的路径和名字
    pages: {
        index: {
            entry: 'src/main.js',
        },
    },
    // 是否进行语法检查
    lintOnSave: false,
})
