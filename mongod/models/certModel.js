/*
能操作certs集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose');
const md5 = require('blueimp-md5');

// 2.字义Schema(描述文档结构)
const certSchema = new mongoose.Schema({
    name: {type: String, required: true}, // 用户名
    id: {type: String, required: true}, // 密码
    create_time: {type: Number, default: Date.now},
});

// 3. 定义Model(与集合对应, 可以操作集合)
const CertModel = mongoose.model('certs', certSchema);

// 初始化默认超级管理员用户: admin/admin
CertModel.findOne({name: 'test1'}).then(cert => {
    if(!cert) {
        UserModel.create({username: 'test1', password: md5('test1')})
            .then(user => {
                console.log('初始化test账号。。。。。 ')
            })
    }
})

// 4. 向外暴露Model
module.exports = CertModel;
