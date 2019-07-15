const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
/*
* fileName:上传时的文件名字
* cb:回调函数，传递的是一个对象：
*   ok:// 1,未上传图片 2、上传图片的格式不正确 3、成功
*   msg:*/
module.exports =  function (fileName,req,cb) {
    // 封装上传图片功能
    var form = new formidable.IncomingForm();
    form.uploadDir = path.resolve(__dirname,"../upload"); // 设置上传的地址
    form.keepExtensions = true;// 是否保留扩展名
    form.parse(req,function (err,params,file) {
        // 得到上传的文件信息
        var upPicInfo = file[fileName];
        if(upPicInfo.size>0){
            var keepArr =[".jpg",".png","gif"];
            var keepName = upPicInfo.name.substr(upPicInfo.name.lastIndexOf(".")).toLowerCase();
            if(keepArr.includes(keepName)){
                var newPicName = Date.now()+keepName;
                fs.rename(upPicInfo.path,path.resolve(__dirname,"../upload/"+newPicName),function (err) {

                    params.newPicName = newPicName;
                    cb({
                        ok:3,
                        msg:"上传图片成功",
                        params
                    })
                })
            }else{
                fs.unlink(upPicInfo.path,function (err) {
                    cb({
                        ok:2,
                        msg:"请选择图片的格式：.png,.gif,.jpg"
                    })
                })
            }
        }else{
            fs.unlink(upPicInfo.path,function (err) {
                cb({
                    ok:1,
                    msg:"请选择您要上传的图片",
                    params
                })
            })
        }
    })
}