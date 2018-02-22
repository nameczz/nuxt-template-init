let path = require('path')
let fs = require('fs')
let route = path.resolve('pages/_lang')
let routes = ['/', '/ch']
/**
 * move & rename json from /components/md
 * to static/documents/cloud_patent
 * @param {*} path 路径
 */
function readDirSync(path) {
    var pa = fs.readdirSync(path)
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + '/' + ele)
        if (info.isDirectory()) {
            readDirSync(path + '/' + ele)
        } else {
            if (
                ele.indexOf('.vue') > -1 &&
                ele !== 'index.vue' &&
                ele !== '_single.vue'
            ) {
                let route = path + '/' + ele.split('.')[0]

                let router = route.split('_lang')[1]
                routes.push(router)
                routes.push(`/ch${router}`)
            }
        }
    })
}
readDirSync(route)
module.exports = routes
