const fs = require('fs');
const download = require('download');
const data = require('./l.json')
//http://mv.aura-el.com/ee458e879f064b759079dc2e241aa186/c52ca7b8458a4fdfb53db24c95f9aa22-4b6ffae84f2e1d243955ecaedcf11a3e-00001.ts

console.log(data)
//数字补零
var prei = n => (Array(5).join(0) + n).slice(-5)
//down某个视频

var down = (file, path) => {
    // var i = 0
    var dp = n => {
        var part = 'http://mv.aura-el.com/' + file + "-" + prei(n) + '.ts'
        var fi = "C:/tvs/" + path + "/" + file.split('/')[1] + "-" + prei(n) + '.ts'
        console.log(fi)
        if (fs.existsSync(fi)) return
        download(part, fi).then(() => {
            console.log('tvs/' + path + ":" + part);
            n != -1 && dp(++n)
        }).catch(er => {
            n = -1
        });
    }
    dp(1)
}
for (let item of data) {
    // console.log(item.title)
    for (les of item.lesson) {
        // console.log(les.name)
        for (j in les.file) {
            var path = item.title + "/" + les.name + "/" + les.part[j]
            console.log("下载文件:" + path)
            down(les.file[j], path)
        }
    }
}