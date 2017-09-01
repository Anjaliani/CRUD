const express = require('express')
const post = express()

app.post('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example of post!')
})