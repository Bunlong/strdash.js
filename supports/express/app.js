const express = require('express')
const app = express()
const port = 3000
const str = require("strdash")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(str('').isEmpty());
  console.log(str('123').isNumeric());
  console.log(str('abc').isAlpha());
  console.log(str('abc').isAlphaNumeric());
  console.log(str('Abc').isLowerCase());

  console.log(`App listening at http://localhost:${port}`)
})
