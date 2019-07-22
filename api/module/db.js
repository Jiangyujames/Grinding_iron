const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
// 以下划线开头的，一般都是做为私有的来定义的。
function _connect(cb) {
    mongoClient.connect("mongodb://127.0.0.1:27017",{useNewUrlParser:true},function (err,client) {
        if(err)
            console.log("网络连接错误");
        else{
            console.log("成功");
            const db = client.db("motie");
            cb(db)
        }
    })
}
// 插入一条记录
// coll:集合
// insertObj:插入的内容
// cb 插入成功以后的回调函数，用于返回结果
module.exports.insertOne = function (coll,insertObj,cb) {
    _connect(function (db) {
        db.collection(coll).insertOne(insertObj,cb)
        // db.collection(coll).insertOne(insertObj,function (err,results) {
        //     cb(err,results);
        // })
    })
}
/*
* 根据条件，获得总文档数
* coll:指定集合
* whereObj:条件*/
module.exports.count = function (coll,whereObj,cb) {
    _connect(function (db) {
        db.collection(coll).countDocuments(whereObj,cb)
    })
}
/*根据ID进行删除*/
module.exports.deleteOneById = function (coll,id,cb) {
    _connect(function (db) {
        db.collection(coll).deleteOne({
            _id:mongodb.ObjectId(id)
        },cb)
    })
}
/*根据ID进行修改*/
module.exports.updateOneById = function (coll,id,upObj,cb) {
    _connect(function (db) {
        db.collection(coll).updateOne({
            _id:mongodb.ObjectId(id)
        },upObj,cb)
    })
}
module.exports.updateOne = function (coll,whereObj,upObj,cb) {
    _connect(function (db) {
        db.collection(coll).updateOne(whereObj,upObj,cb)
    })
}
//根据条件更改多条数据
module.exports.updateMany=function (coll,whereObj,upObj,cb) {
    _connect(function (db) {
        db.collection(coll).updateMany(whereObj,upObj,cb)
    })
}
// 根据ID获得相对应的信息
module.exports.findOneById = function (coll,id,cb) {
    _connect(function (db) {
        db.collection(coll).findOne({
            _id:mongodb.ObjectId(id)
        },cb)
    })
}
module.exports.findOne = function (coll,wehreObj,cb) {
    _connect(function (db) {
        db.collection(coll).findOne(wehreObj,cb)
    })
}
// 根据条件进行查找
module.exports.find = function (coll,obj,cb) {
    obj.whereObj = obj.whereObj || {};
    obj.sortObj = obj.sortObj || {};
    obj.skip = obj.skip || 0;
    obj.limit = obj.limit || 0;
    _connect(function (db) {
        db.collection(coll)
            .find(obj.whereObj)
            .skip(obj.skip)
            .limit(obj.limit)
            .sort(obj.sortObj)
            .toArray(cb)
    })
}
module.exports.connect = _connect;

// _connect(function (db) {
//     console.log(db)
// })


