const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())
const publicDirectoryPath = path.join(__dirname, './client')
app.use(express.static(publicDirectoryPath))
const port = process.env.PORT || 3400




app.listen(port)

