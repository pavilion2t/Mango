const express = require('express')

const app = express()
app.get('/',function(req,res){
  res.send("<h1>hello</h1>")
})

app.get('/data',function(req,res){
  res.json({
    name:'judy',type:'hh'
  })
})

app.listen(9093,function(){
  console.log("....")
})
