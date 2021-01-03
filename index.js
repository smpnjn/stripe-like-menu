const express = require('express')
const app = express()
const http = require('http');
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('public/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})