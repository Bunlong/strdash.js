const express = require('express')
const app = express()
const port = 3000
const str = require("strdash")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(str('abc').isAlpha());
  console.log(`App listening at http://localhost:${port}`)
})
