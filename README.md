* Step: 1
```  
create-react-app mango   
npm run eject    
npm install express --save     
node server.js
```  
Remember res.send() res.json()  

```  
const express = require('express')

const app = express()
app.get('/',function(req,res){
  res.send("<h1>hello</h1>")
})

app.get('/data',function(req,res){
  res.json({
    name:'judy',type:'female'
  })
})

app.listen(9093,function(){
  console.log("....")
})   
```    

restart auto   
```   
npm install -g nodemon     
nodemon server.js
```
