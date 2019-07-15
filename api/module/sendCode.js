//querystring 内置模块 该模块在urlencoded与对象之间进行转换
const querystring=require("querystring");
const request=require("request");
const help=require("./help");
module.exports.sendCode=function(mobile,cb){
    //console.log(mobile)
    let code=help.randomNum(100000,999999);
    console.log(code)
    let queryObj={
        mobile,
        tpl_id:"164799",
        tpl_value:"#code#="+code,
        key:"1b32822929054b8a2757e6b357e3c4ad"
    }
    let url="http://v.juhe.cn/sms/send?"+querystring.stringify(queryObj);
    console.log(url)
    request(url,function(err,response,body){
        if(!err && response.statusCode===200){
            var results=JSON.parse(body);
            if(results.error_code===0){
                cb({
                    ok:1,
                    code
                })
            }else{
                cb({
                    ok:-1,
                    msg:results.reason
                })

            }
        }else{
            cb({
                ok:-11,
                msg:"网络连接错误"
            })
        }
    })
}

