const express =require('express');
const db=require('./db_connect');
const cors = require('cors') //CORS
const bodyParser = require('body-parser') //解析POST參數

const app=express()


//CORS
//記得前端設定credentials = 'include'
const whiteList = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:5500', //vs code
    undefined,
  ]
  const corsOptions = {
    credentials: true,
    origin: function(origin, callback) {
      if (whiteList.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(null, false)
      }
    },
  }
  app.use(cors(corsOptions))

app.use(bodyParser.json()) //解析json格式


app.get('/home',(req,res)=>{
    let sql='SELECT * FROM `sale_map`'
    db.queryAsync(sql)
    .then(r=>{
        return res.json(r)
    })
    .catch(err=>console.log(err))
})


app.post('/insertNewInfo',(req,res)=>{
    const output = {
    success: false,
    data: '',
    message: '',
  }
    let sql='INSERT INTO `sale_map`(`sort`, `image`, `name`, `generalPrice`, `showPlace`, `showMonth`, `showTime`,`boxSize`, `shadow`) VALUES (?,?,?,?,?,?,?,"none","none")'
    db.queryAsync(sql,
        [
            req.body.sort,
            req.body.image,
            req.body.name,
            req.body.generalPrice,
            req.body.showPlace,
            req.body.showMonth.join(),
            req.body.showTime.join(),
        ]
        )
    .then(r => {
      console.log('rrrrrrrrrr',r)
      return res.json(r)
    })
    .catch(err => {
      output.data = err
      // console.log(err)
      res.json(output)
    })
})

//404

app.use((req,res)=>{
    res.send('404 not found')
})



app.listen(5500,()=>{
    console.log(`Express server start`)
})