const jwt=require("jwt-simple");
const key="&%^$%$%#$"
module.exports={
    encode(adminName){
        return jwt.encode({
            adminName,
            lastTime:Date.now()+600000*10*1000
        },key)
    },
    decode(token){
        try{
            const info=jwt.decode(token,key);
            if(info.lastTime<Date.now()){
                return{
                    ok:-3,
                    msg:"过期了"
                }//
            }else{
                return{
                    ok:1,
                    msg:"成功",
                    info
                }
            }
        }catch(err){
            return{
                ok:-3,
                msg:"解析失败"
            }
        }
    }
}