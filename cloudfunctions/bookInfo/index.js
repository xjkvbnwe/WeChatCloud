// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const db = cloud.database()
    var result;
    db.collection('Day7_17')
    .get()
    .then(res => {
        result = res
    })
    return result

}