const data = require('./l.json')
const cmd = require('node-cmd')
const path = require('path')

for (let item of data) {
    // console.log(item.title)
    for (les of item.lesson) {
        // console.log(les.name)
        for (j in les.file) {
            var pat = './tvs/' + item.title + "/" + les.name + "/" + les.part[j]
            // console.log("下载文件:" + path)
            // down(les.file[j], path)
            var path2 = path.resolve(pat)
            console.log("合并文件:" + pat)
            console.log("合并文件:" + pat)
            cmd.get(
                'copy /b  ' + path2 + "/" + '*.ts  ' + path2 + '.ts', //合并
                function () {
                    console.log("合并完成！--" + path2 + '.ts')
                }
            );
        }
    }
}