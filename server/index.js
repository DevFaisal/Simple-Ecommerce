const express = require('express')
const products = require('./products')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT_NUMBER || 8000

app.use(express())
app.use(cors())

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.listen(PORT, () => {
    console.log("Server has Stared at PORT :", PORT);
})