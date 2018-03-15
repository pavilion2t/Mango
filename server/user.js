const express = require('express')
const Router = express.Router()
const models = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const _filter = {'pwd':0, '_v':0}

Router.get('/list', function(req,res){
  User.find({}, function(err,doc){
    return res.json(doc)
  })
})

Router.post('./login', function(req,res){
  const {user, pwd} = req.body
  User.findOne({user,pwd:md5Pwd(pwd)}, _filter, function(err,doc){
    if(!doc){
      return res.json({code:1, msg:"wrong user or pwd!!!"})
    }
    res.cookie('userid', doc._id)
    return res.json({code:0,data:doc})
  })
})


Router.post('./register', function(req,res){
  const {user,pwd,type} = req.body
  User.findOne({user:user},function(err,doc){
    if(doc){
      return res.json({code:1, msg:"repeat!!!"})
    }
    User.create({user,pwd:md5Pwd(pwd),type}, _filter, function(e,d){
      if(e){
        return res.json({code:1, msg:"back-end error!!!"})
      }
      return res.json({code:0})
    })
  })
})
Router.get('/info', function(req,res){
  const {userid} = req.cookies
  if(!userid){
    return res.json({code:1})
  }
  User.findOne({_id:userid}, function(err,doc){
    if(err){
      return res.json({code:1, msg:'back-end error!!!'})
    }
    if(doc){
      return res.json({code:0,data:doc})
    }
  })
})

function md5Pwd(pwd){
  const salt = 'learning_md5'
  return utils.md5(utils.md5(pwd+salt))
}
module.exports = Router
