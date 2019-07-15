const express=require("express");
const db=require("./module/db");
const help=require("./module/help");
const bodyparse=require("body-parser");
const {sendCode}=require("./module/sendCode");
const app=express();
app.use(bodyparse.json())
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Access-Control-Allow-Methods","DELETE,PUT");
    next()
});
//登陆
app.post("/login",function(req,res){
    /*
    * 1、接受参数两个参数：phoneId \ code
    * 2、去userCodeList集合当中根据phoneId code查找，看是否有该文档
    *  1、有
    *   one 检查验证码是否有效
    *       No.1 失效：
    *       No.2 未失效
    *              1.去用户表中查找是否有该手机号
    *                   a 有直接返回成功
    *                   b 无 在用户表中新增一条记录 返回成功
    *   2、无：验证码或者手机号错误
    * */
    const {phoneId,code}=req.body;
    db.find("userCodeList",{
        whereObj:{
            phoneId,
            code:code/1
        },
        sortObj:{
            sendTime:-1
        }

    },(err,codeInfo)=>{
        if(codeInfo.length>0){
            if(codeInfo[0].sendTime+(10*1000*60)>Date.now()){
                db.findOne("userList",function(err,userInfo){
                    if(userInfo){
                        //登陆过 修改最后的登陆时间
                        db.updateOne("userList",{
                            phoneId
                        },{
                            $set:{
                                lastLoginTime:Date.now()
                            }
                        },function(){
                            res.json({
                                ok:1,
                                msg:"登陆成功",
                                phoneId
                            })
                        })
                    }else{
                        //未登录过
                        db.insertOne("userList",{
                            phoneId,
                            goldNum:999999,
                            regTime:Date.now(),
                            lastLoginTime:Date.now()
                        },function(){
                            res.json({
                                ok:1,
                                msg:"登陆成功",
                                phoneId
                            })
                        })
                    }
                })
            }else{
                help.json(res,-1,"验证码已失效")
            }

        }else{
            help.json(res,-1,"验证码或者手机号错误")
        }
    })
});
// 发送验证码
app.get("/sendCode",function(req,res){// 发送验证码
    /*
     *1.接受phoneId
     * 2、在发送验证码之前，验证发送的短信sh是否过期
     * 3、发送验证码
     * 4、将发送的信息（手机号、验证码、发送的时间）
      *  */
    const phoneId=req.query.phoneId;
    //console.log(9999999999999)
    //console.log(phoneId,222222222222222222)
    function _sendCode(){
        console.log(6666666666666)
        sendCode(phoneId,function(results){
            console.log(results)
            if(results.ok===1){
                db.insertOne("userCodeList",{
                    phoneId,
                    code:results.code,
                    sendTime:Date.now()
                },(err,results)=>{
                    if(err) help.json(res);
                    else help.json(res,1,"发送成功")
                })
            }else{
                res.json(results)
            }
        })
    }
    db.findOne("userCodeList",{
        phoneId
    },(err,results)=>{
        console.log(7777777)
        if(results){
            if(results.sendTime+(1000*60*1)<Date.now()){
                //过期了
                _sendCode()
            }else{
                //未过期
                help.json(res,-1,"请等"+Math.ceil((results.sendTime+1*60*1000-Date.now())/1000)+"秒以后再发送")
            }
        }else{
            //第一次发送验证码
            _sendCode()
        }
    })
    //console.log(phoneId)

});
app.listen(80,function(){
    console.log("success222")
})