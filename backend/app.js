const express = require('express')
const app = express()
const port = 3000


const hola = {
    uno:"uno",
    dos:"dos"
}

app.get('/', (req, res) => {
    res.send(hola)
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


