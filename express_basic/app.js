// usando objeto express
const express = require('express')
// app de express
const app = express()
//puerto en que camor a ver nuestra app: localhost:3000
const port = 3000

//path inicial. responderá a la url localhost: 3000
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// Respondiendo texto
// Localhost:3000/launchx
app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a launchx')
})

// Regresando un objeto 
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name:"Explorer", msg: "Hello"}
    res.send(explorer)
})

// Query Params: Recibir parametros por la url
// http://localhost:3000/explorers/Einar
// req.params = {"explorerName": "Einar"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
   })