const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/chat'
mongoose.connect(DB_URL)

const models = {
  user: {
    'user': {type:String, require:true},
    'pwd': {type:String, require:true},
    'type': {type:String, require:true},

    'avatar':{type:String},
    'desc':{type:String},
    'title':{type:String},
    'company':{type:String},
    'money':{type:String}
  },
  chat:{}
}

for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.export = {
  getModel: function(name){
    return mongoose
  }
}


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
