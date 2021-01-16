/*
能操作certs集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose');
const md5 = require('blueimp-md5');

// 2.字义Schema(描述文档结构)
const defaultcertSchema = new mongoose.Schema({
    name: {type: String, required: true}, // 名
    create_time: {type: Number, default: Date.now},
});

// 3. 定义Model(与集合对应, 可以操作集合)
const defaultCertModel = mongoose.model('defaultcerts', defaultcertSchema);

// 初始化默认超级管理员用户: admin/admin
defaultCertModel.findOne({name: 'test1'}).then(cert => {
    if(!cert) {
        defaultCertModel.create({name: 'test1'}).then(cert => {
                console.log('初始化test账号。。。。。 ')
            })
    }
})

// 4. 向外暴露Model
module.exports = defaultCertModel;
