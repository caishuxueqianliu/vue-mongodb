
function siteMap(req, res, next) {
    var stream=fs.createReadStream('../public/.mobileconfig',{flags:'r'});
    stream.pipe(res);
}
