const express = require('express')
const app = express()
const port = 3000
const requestIp = require('request-ip')

app.get('/', (req, res) => {

  const ipe = requestIp.getClientIp(req)
  console.log(ipe)

  res.send('PUTORIAL XD')
})

app.get('/aaa', (req, res) => {
  const ipe = requestIp.getClientIp(req)
  console.log(ipe)

  res.send('PUTORIAL /aaatest')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
