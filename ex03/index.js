const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    return new Promise(resolve => {
        readStream.on('data', function (data) {
            console.log('收到文件数据', data.toString());
            resolve(JSON.parse(data.toString()))
        });
    })
}
