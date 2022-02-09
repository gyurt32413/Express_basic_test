// 設置express
const express = require("express")
const app = express()
const port = 3000

// 設置handlebars
const exphbs = require('express-handlebars')


// 設置模板引擎(將layout控制權轉給handlebars)
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 載入靜態資料
app.use(express.static('public'))

// 設置首頁
app.get('/', (req, res) => {
  res.render('index')
})

// 設置其他頁面
app.get('/:route', (req, res)=> {
  res.render('show', { page: req.params.route })
})


// start and listen on the express serve
app.listen(port, () =>{
  console.log('set successfully')
})