const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/onedianpu')
const db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error:'))

db.once('open',function () {
console.log('数据库绑定成功')
})

module.exports = db