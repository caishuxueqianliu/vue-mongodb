// base64 转文件
// esLint-disabled
// https://blog.csdn.net/spring_is_coming/article/details/108379942
//
//  dataURLtoFile (dataurl, filename) { // 生成Blob
//   var arr = dataurl.split(',')
//   var mime = arr[0].match(/:(.*?);/)[1]
//   var bstr = atob(arr[1])
//   var n = bstr.length
//   var u8arr = new Uint8Array(n)
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n)
//   }
//   return new Blob ([u8arr], { type: mime });
// }
//  createDownloadFileUrl (fileName, file) {
//   const blob = this.dataURLtoFile(`data:application/zip;base64,${file}`, fileName); // application/zip 需要改成要下载文件的类型
//   blob.lastModifiedDate = new Date()
//   blob.name = fileName
//   return URL.createObjectURL(blob)
// }
// 文件 ——> Base64
// <input id="file" type="file" onchange="getBase64(this)" />
//
//   function getBase64(element) {
//     // var file = element.files[0];
//     var file = document.getElementById("file").files[0]
//     var reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function (e) {
//       var data_base64 = this.result; //JS读取后是有头信息的data:image/jpeg;base64,头信息后面才是文件的Base64数据
//       console.log(data_base64)
//     }
//   }

// Base ——> 文件
/**
 *Base64字符串转二进制
 */
// function dataURLtoBlob(dataurl) {
//   bstr = atob(dataurl),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new Blob([u8arr]);
// }

// var blob = dataURLtoBlob("去除头信息的纯Base64数据");
// var data = new Blob([blob]);
// var downloadUrl = window.URL.createObjectURL(data);
// var result=document.getElementById("result");
// var anchor = document.createElement("a");
// anchor.href = downloadUrl;
// anchor.download = "下载保存文件到名称.*";//*表示可以是任意类型的文件
// anchor.click();
// window.URL.revokeObjectURL(data);
