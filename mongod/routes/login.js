/*
功能要求
1.登陆接口
2.验证码界面
 */
var express = require('express');
var router = express.Router();
var svgCaptcha = require('svg-captcha');
const md5 = require('blueimp-md5');
var session = require('express-session');
const mongoose = require('mongoose')
const UserModel = require('../models/userModel');
router.use(session({
    // resave: true,  // 新增
    secret: 'itcast',
    resave: false,
    saveUninitialized: true,// 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
    cookie: {maxAge: 60000}
}));

// 验证码
router.get('/captcha', function (req,res,next) {
    var captcha = svgCaptcha.create({
        ignoreChars: '0o1l',
        noise: 2,
        color: true
    });
    req.session.captcha = captcha.text.toLowerCase();
    console.log(req.session.captcha)
    res.type('svg');
    res.send(captcha.data);
});

// 登陆接口
router.post('/login',(req,res,next)=>{
    const { user, pass, code } = req.body
    UserModel.findOne({username:user}, function (err, user) {
        if(user) {
            if (code != req.session.captcha) {
                res.send({code: 1, msg: '验证码错误'})
            } else if (md5(pass) != user.password) {
                res.send({code: 1, msg: '密码错误'})
            } else {
                res.send({code: 0, msg: '登陆成功', data: user})
            }
        } else{
            res.send({code: 1, msg: '用户名不存在'})
        }
    })
})

module.exports = router;
