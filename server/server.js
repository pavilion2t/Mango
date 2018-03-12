const express = require('express')
const userRouter = require('./user')
const models = require('./model')
const User = model.getModel('user')

Router.get('./list',function(req,res){

})

const app = express()
app.use('/user', userRouter)

app.listen(9093,function(){
  console.log("....")
})
