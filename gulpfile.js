/*
 * @Author: mikey.weiwei 
 * @Date: 2018-11-05 19:38:40 
 * @Last Modified by: mikey.weiwei
 * @Last Modified time: 2018-11-05 19:44:31
 */
//1.引入各种gulp插件
var gulp = require("gulp");
var gulpSass = require("gulp-sass");
var gulpUglify = require("gulp-uglify");
var gulpCss = require("gulp-clean-css");
var gulpServer = require("gulp-webserver");
//2.搭建服务
gulp.task("server", function() {
    return gulp.src('./src')
        .pipe(gulpServer({
            port: "8080",
            host: "localhost",
            middleware: [function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return res.end();
                }
            }]
        }))
})