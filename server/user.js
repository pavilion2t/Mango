const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const _filter = {'pwd':0, '_v':0}

Router.post('./register', function(req,res){
  const {user,pwd,type} = req.body
  User.findOne({user:user},function(err,doc){
    if(doc){
      return res.json({code:1, msg:"重复!!!"})
    }
    const userModel = new User({user,type,pwd:md5Pwd(pwd)})
    userModel.save(function(e,d){
      if(e){
        return res.json({code:1, msg:"后端错误!!!"})
      }
      const {user, typr, _id} = d
      res.cookie('userid', _id)
      return res.json({code:0, data:{user, type, _id}})
    })
  })
})

Router.post('./update', function(req,res){
  const userid = req.cookie.userid
  if(!userid){
    return json.dumps({code: 1})
  }
  const body = req.body
  User.findByIdUpdate(userid,body,function(err,doc){
    const data = Object.assign({}, {
      user: doc.user, type:doc.type
    }, body)
    return {code:0, data}
  })
})

Router.post('./login', function(req,res){
  const {user, pwd} = req.body
  User.findOne({user,pwd:md5Pwd(pwd)}, _filter, function(err,doc){
    if(!doc){
      return res.json({code:1, msg:"用户名或密码错误"})
    }
    res.cookie('userid', doc._id)
    return res.json({code:0,data:doc})
  })
})

Router.get('/info', function(req,res){
  // const {userid} = req.cookies
  if(!userid){
    return res.json({code:0})
  }
  User.findOne({_id:userid}, function(err,doc){
    if(err){
      return res.json({code:1, msg:'后端错误'})
    }
    if(doc){
      return res.json({code:0,data:doc})
    }
  })
})

Router.get('/list', function(req,res){
  const { type } = req.query
  User.find({type}, function(err,doc){
    return res.json({code:0,data:doc})
  })
})

function md5Pwd(pwd){
  const salt = 'learning_md5'
  return utils.md5(utils.md5(pwd+salt))
}
module.exports = Router
