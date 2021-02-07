/*
 这是对于一般添加审核
 导出证书签名的api以及
 一些读取和脚本调用的操作
 */
var express = require('express');
var router = express.Router();
var fileOperation = require('../utils/fileOperation.js');
var fs = require('fs')
var spawn = require('child_process').spawn;
const DefaultCert = require('../models/defaultCertModel');


// token
router.get('/getToken', function(req, res, next) {
    free = spawn('python3', ['utils/getToken.py','G6RV3V7K77','483353e9-42aa-485f-9f1a-78557031e2b9']);
    free.on('exit', function (code, signal) {
    });
    free.stdout.on('data',function (token) {
        console.log(token.toString())
        var token = token.toString().replace('\n','')
        res.send({'token':token})
    })
    free.stderr.on('data',function (data) {
        console.log(data.toString())
        var token = data.toString()
        res.send({'token':token})
    });
    free.on('exit', function (code, signal) {
    });
});

// 提供前端可以选择的cert选项
router.get("/getcertlists",async (req,res,next)=>{
    const certLists = await fileOperation.reddir("assets")
    // const defaultcert = await DefaultCert.find().name
    res.send({data:certLists})
})

// 每一个cert目录下的所有文件输出提供前端下载和展示
router.get("/defaultCert",async (req,res,next)=>{
    const name  =await DefaultCert.find()
   // console.log(name[0].name)
  // const certList = await fileOperation.reddir("assets/" + name[0].name)
   res.send({data: name[0].name})
})
// 更新当前cert的选择
router.get("/getcertlist",async (req,res,next)=>{
    const cert = req.query.cert
    const certList = await fileOperation.reddir("assets/" + cert)
    await DefaultCert.updateOne({name:cert})
    res.send({data: certList})
})
// 读取文件内容
router.get("/readfilecontent",async (req,res,next)=>{
    const cert = "test账号"
    const file = "issuer.txt"
    const fileContent = await fileOperation.readfile("assets/" + cert + '/' + file)
    res.send({data:fileContent})
})
// 对base64 进行文件下载
router.post("/base4download",async (req,res,next)=>{
        const { certForm } = req.body
        var bitmap = new Buffer(certForm.base64, 'base64');
        fs.writeFileSync("cert/" + certForm.name + '.p12', bitmap);
        res.send({msg:'ok'})
})
// 对base64 进行文件下载
router.post("/base4profile",async (req,res,next)=>{
    const { profileForm } = req.body
    console.log(profileForm.name)
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = new Buffer(profileForm.base64, 'base64');
    // write buffer to file
    fs.writeFileSync("profile/" + profileForm.name + '.mobileprovision' , bitmap);
    //const file = "issuer.txt"
    //const fileContent = await fileOperation.readfile("assets/" + cert + '/' + file)
    res.send({msg:'ok'})
})
module.exports = router;
