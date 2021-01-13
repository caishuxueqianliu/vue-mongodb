var jwt = require('jsonwebtoken');
// var jwts = {
//     generateToken: function () {
//         let datas = '483353e9-42aa-485f-9f1a-78557031e2b9';
//         let algorithm ="ES256"
//         let key = 'G6RV3V7K77'
//         let created = Math.floor(Date.now() / 1000);
//         // let cert = fs.readFileSync(path.join(__dirname, './pem/private_key.pem'));私钥 可以自己生成
//         let private_key = 'MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgzYnoujJnw8FA9Jcx\n' +
//             'g4mTr6HzQG2xSrDpiym/Q5nSGAOgCgYIKoZIzj0DAQehRANCAAQCdi1c1EbwR8Dd\n' +
//             'WsBGpKPSwOnbtVuzyl2uJDmIuTUhUHEpE8B0b9fJCVVcXuvw+IOeDClHnxDghY5B\n' +
//             'ux0+yauf'
//         let headers = {
//             "alg": algorithm,
//             "kid": key,
//             "typ": "JWT"
//         }
//         let token = jwt.sign({
//             iss: datas, // 自定义字段
//             exp: created + 60 * 60 * 12, // 过期时间 30 分钟
//             aud: "appstoreconnect-v1",
//         }, private_key,algorithm, headers);
//         return token;
//     },
//     verifyToken:function(token,key,callback){
//
//
//         jwt.verify(token, key, (err, decoded)=> {
//             if (decoded) {
//                 callback(decoded);
//             } else {
//                 callback(err);
//             }
//         });
//
//
//     }
// }
var jwts = {
    generateToken: function () {
        let iss = '483353e9-42aa-485f-9f1a-78557031e2b9';
        let algorithm ="ES256"
        let key = 'G6RV3V7K77'
      let header = {
          "alg": algorithm,
          "kid": key,
          "typ": "JWT"
        }
        let private_key = 'MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgzYnoujJnw8FA9Jcxg4mTr6HzQG2xSrDpiym/Q5nSGAOgCgYIKoZIzj0DAQehRANCAAQCdi1c1EbwR8DdWsBGpKPSwOnbtVuzyl2uJDmIuTUhUHEpE8B0b9fJCVVcXuvw+IOeDClHnxDghY5Bux0+yauf'


        let created = Math.floor(Date.now() / 1000);
        // let cert = fs.readFileSync(path.join(__dirname, './pem/private_key.pem'));私钥 可以自己生成
        let token = jwt.sign({
            "iss": iss,
            "exp": created + 60 * 60 * 12, // 过期时间 30 分钟
            "aud": "appstoreconnect-v1",
        },   private_key,null,null,algorithm,header);
        return token;
    },




}
module.exports = jwts;
