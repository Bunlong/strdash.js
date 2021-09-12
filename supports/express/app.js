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
  console.log(str('abc').isLowerCase());
  console.log(str('ABC').isUpperCase());
  console.log(str('yes').toBoolean());
  console.log(str('99').toInt());

  console.log(`App listening at http://localhost:${port}`)
})
