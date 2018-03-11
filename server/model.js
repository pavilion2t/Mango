const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log("mongo connect success")
})
// 通过mongoose来操作JSON数据， 定义文档模型，Schema和Model
const User = mongoose.model('user', new mongoose.Schema({
  user: {type:String,require:true},
  age: {type:Number,require:true}
}))
// String Number  ...create/remove/update/Find/FindOne
User.create({
  user:'zhangsan',
  age:18
},function(err,doc){
  if(!err){
    console.log(doc)
  }else{
    console.log(err)
  }
})
