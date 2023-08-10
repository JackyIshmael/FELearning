const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World!')
  // 也没有代码提示。这就把代码给丢上来了？
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
