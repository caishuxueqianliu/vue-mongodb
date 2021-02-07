var fs = require('fs')

// 读取目录下文件
function reddir(dir) {
var list = []
    return new Promise(((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            files.filter(item => {
                if (item != '.DS_Store') {
                    list.push(item)
                }
            })
           // list =files
         resolve(list)
        });
    }))
}

// 读取文件内容
function readfile(file){
    var content = ''
    return new Promise(((resolve, reject) => {
        fs.readFile(file,null,(err,data)=>{
            content = data
            resolve(content.toString())
        })

    }))
}
// module.exports = reddir;
exports.reddir = reddir;
exports.readfile = readfile;
