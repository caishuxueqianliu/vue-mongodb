/*
 这是对于一般添加审核
 导出证书签名的api以及
 一些读取和脚本调用的操作
 */
var express = require('express');
var router = express.Router();
var fileOperation = require('../utils/fileOperation.js');
var fs = require('fs')
const DefaultCert = require('../models/defaultCertModel');

// 提供前端可以选择的cert选项
router.get("/getcertlists",async (req,res,next)=>{
    const certLists = await fileOperation.reddir("assets")
    // const defaultcert = await DefaultCert.find().name
    res.send({data:certLists})
})

// 每一个cert目录下的所有文件输出提供前端下载和展示
router.get("/getcertlist",async (req,res,next)=>{
    const cert = req.query.cert
    const certList = await fileOperation.reddir("assets/" + cert)
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
    console.log(certForm.name)
        // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
        var bitmap = new Buffer(certForm.base64, 'base64');
        // write buffer to file
        fs.writeFileSync("cert/" + certForm.name + '.p12', bitmap);
    //const file = "issuer.txt"
    //const fileContent = await fileOperation.readfile("assets/" + cert + '/' + file)
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
