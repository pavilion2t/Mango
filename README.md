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
* Step: 3 Cooperate    
```   
npm install mongoose --save    
```      
currently, CRUD  
后续操作：body-parser支持Post参数，cookie-parser存储登录信息cookie    

* Step: 4 Requirement Analysis   
```    
* User = employee + employer  
* Login & Registry   
* Personal Information   
* Chat Room    
```       

* Step: 5 Other:   
* MongoDB 字段设计  
* axios 发送异步请求  
* redux 管理所有数据      

```     
// 简洁好用的发送请求库(端口不一致；统一发送）
npm install axios --save    

```       

* Step: 6 React Router  
```  
yarn add react-router-dom  
```

* Step: 7 Register/Login  
validate by cookie   
```   
npm install cookie-parser --save     
```  
loading page => login => inner page  

