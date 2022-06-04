/**
 * Time:2022/2/11 11:06 27
 * Name:app.js
 * Path:Web代码/src/com/charlatan/practice/Node/留言板
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let express = require('express')
let bodyParser = require('body-parser')
const mongoose = require('mongoose')

let User = require('./utils/user')
let database = require('./data')
const { findID, ContentDataSchema, ContentInformationSchema } = require(
    './data')
let Snowflake = require('./Snowflake')
let randomNum = require('./algorithm')
let cors = require('cors')

let server = express()
server.set('trust proxy', true)// 设置以后，req.ips是ip数组；如果未经过代理，则为[]. 若不设置，则req.ips恒为[]

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cors())

server.get('/', function (request, response) {
    detectData(request)
})

server.post('/createUser',
    /**
     * 创建用户
     */
    function (request, response) {
        detectData(request)
        let use = request.body
        if (use !== null) {
            findID().then(value => {
                
                let user = new User(use.name, use.age, use.sex, use.address,
                    value[value.length - 1].uid + 1, use.password)
                database.UserModel.create({
                    name: user.name,
                    age: user.age,
                    sex: user.sex,
                    address: user.address,
                    isDelete: user.isDelete,
                    uid: user.id,
                    password: user.password,
                }, function (err) {
                    if (err) {
                        console.log('用户数据插入失败')
                        throw err
                    } else {
                        console.log('用户数据插入成功')
                        response.send('操作成功')
                    }
                })
            })
        } else {
            response.send('用户数据发送错误')
        }
    })

server.get('/getKey',
    /**
     * 返回要进行加密的key的offset
     * @param req
     * @param res
     */
    function (req, res) {
        detectData(req)
        let arr = randomNum(100, 10000, 3)
        let sf = new Snowflake(arr[0], arr[1], arr[2])
        let key = sf.nextId()
        let offset = sf.nextId()
        
        res.send({ key: key.toString(), offset: offset.toString() })
    })

server.post('/sendComment',
    /**
     * 发送评论
     */
    function (req, res) {
        detectData(req)
        let comment = req.body
        let id = mongoose.Types.ObjectId().toString()
        
        // TODO:评论内容的字检测检测
        ContentDataSchema.create({
            content: comment.content,
            _id: id,
        }, function (err) {
            if (!err) {
                console.log('用户评论内容添加成功')
                ContentInformationSchema.create({
                    name: comment.name,
                    eMail: comment.eMail,
                    isAnonymous: comment.isAnonymous,
                    contentDataId: id,
                }, function (err) {
                    if (!err) {
                        console.log('用户评论信息添加成功')
                        res.send('评论成功')
                    } else {
                        console.log('用户评论信息添加失败')
                        throw err
                    }
                })
            } else {
                console.log('用户评论内容添加失败')
                throw err
            }
        })
    })

server.get('/requestReview',
    /**
     * 访问数据库中的评论信息
     */
    function (req, res) {
        detectData(req)
        if (req.url.split('?')[1] !== undefined) {
            
            let skip = parseInt(req.url.split('?')[1].split('&')[0].split('=')[1])
            let limit = parseInt(req.url.split('?')[1].split('&')[1].split('=')[1])
            
            let skipNum = skip > 10 ? 10 : skip
            let limitNum = limit > 10 ? 10 : limit
            
            database.ContentDataSchema.find({}, { 'content': 1, '_id': 0 },
                { skip: skipNum, limit: limitNum }, function (err, doc) {
                    if (!err) {
                        res.send(doc)
                    } else {
                        console.log('信息发送失败')
                        throw err
                    }
                })
        } else {
            console.log('请求错误')
            res.send('请求错误')
        }
    })

/**
 * 记录访问者的信息
 *  - x-forwarded-for --- 各阶段ip的CSV, 最左侧的是原始ip【如果使用代理，那么会是多层 IP 】
 *  - req.url --- 同req.connection.remoteAddress
 * @param req 请求头
 * @returns {{hostname, ip: *, time: string, url, x_forwarded_for: string}}
 */
function detectData (req) {
    let data = new Date(Date.now())
    let time = data.getFullYear()
        + '-' + data.getMonth()
        + '-' + data.getDate()
        + ' ' + data.getHours()
        + ':' + data.getMinutes()
        + ':' + data.getSeconds()
    let content = JSON.stringify(req.body)
    
    database.RecordModel.create({
        'time': time,
        'x_forwarded_for': '' + req.header('x-forwarded-for') + '',
        'ip': req.ip,
        'url': req.url,
        'hostname': req.hostname,
        'type': req.method,
        'isDelete': false,
        'content': content,
    }, function (err) {
        if (err) {
            console.log('访问数据插入失败')
            throw err
        } else {
            console.log('访问数据插入成功')
        }
    })
}

server.listen('3000', function () {
    console.log('3000 端口开始监听...')
})
