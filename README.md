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

* Step: 2  Install MongoDB   
```      
mongod --config /usr/local/etc/mongod.conf    
MongoDB shell version v3.4.2
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.2
WARNING: shell and server versions do not match
Server has startup warnings:
2018-03-08T09:32:31.806+0800 I CONTROL  [initandlisten]
2018-03-08T09:32:31.807+0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-03-08T09:32:31.807+0800 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-03-08T09:32:31.807+0800 I CONTROL  [initandlisten]
>      
```    
cooperate    
```   
npm install mongoose --save    
```    
