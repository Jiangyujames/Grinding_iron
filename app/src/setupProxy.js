const proxy = require("http-proxy-middleware");
module.exports = function(app){
    app.use("/motie",proxy({
        target:"http://app2.motie.com",
        changeOrigin:true,
        pathRewrite:{
            "^/motie":""
        }
    }))
    app.use("/api",proxy({
        target:"http://127.0.0.1",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}