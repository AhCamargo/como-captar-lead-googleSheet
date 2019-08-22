const express = require('express')
const bodyParser =require('body-parser')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require("./routes"));

const port = 7000
server.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});