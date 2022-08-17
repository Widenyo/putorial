const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('PUTORIAL XD')
})

app.get('/aaa', (req, res) => {
  res.send('PUTORIAL /aaa')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
