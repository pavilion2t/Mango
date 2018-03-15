const express = require('express')
const Router = express.Router()
const models = require('./model')
const User = model.getModel('user')
const utils = require('utility')

Router.get('/list', function(req,res){
  User.find({}, function(err,doc){
    return res.json(doc)
  })
})

Router.post('./login', function(req,res){
  //  0910
}


Router.post('./register', function(req,res){
  console.log(req.body.data)
  const {user,pwd,type} = req.body
  User.findOne({user:user},function(err,doc){
    if(doc){
      return res.json({code:1, msg:"repeat!!!"})
    }
    User.create({user,pwd:md5Pwd(pwd),type},function(e,d){
      if(e){
        return res.json({code:1, msg:"back-end error!!!"})
      }
      return res.json({code:0})
    })
  })
})
Router.get('/info', function(req,res){
  return res.json({code: 0})
})

function md5Pwd(pwd){
  const salt = 'learning_md5'
  return utils.md5(utils.md5(pwd+salt))
}
module.exports = Router
