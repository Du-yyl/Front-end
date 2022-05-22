/**
 * Time:2022/3/27 18:08 40
 * Name:config-overrides.js
 * Path:
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 配置具体修改规则
 */
const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
    // 要进行引入
    fixBabelImports('import', {
        // 要引入的东西是 antd
        libraryName: 'antd',
        // 引入的语法是 es
        libraryDirectory: 'es',
        // 引入的内容是 css
        style: 'css',
    }),
)
