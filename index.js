const express = require('express')
const app = express()
const port = 3000


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
const postsRouter = require('./routes/siswa');
app.use('/api/siswa', postsRouter); // use route posts di Express


app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})