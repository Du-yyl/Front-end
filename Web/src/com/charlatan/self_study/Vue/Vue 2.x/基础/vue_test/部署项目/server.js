/**
 * Time:2022/3/7 12:15 18
 * Name:server.js
 * Path:Vue 2.x/基础/vue_test/部署项目
 * ProjectName:Vue
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let express = require('express')

let app = express()
app.use(express.static(__dirname + '/static'))

app.get('/person', (req, res) => {
    res.send({
        name: 'tom',
        age: 20,
    })
})

app.listen(3000, (err) => {
    if (!err) {
        console.log('3000...')
    }
})
