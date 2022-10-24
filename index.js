// https://www.npmjs.com/package/express

const express = require('express')
const app = express()
const port = 3000;

// Middlewares, indico que pueda trabajar con json for security
app.use(express.json())

// Endpoint, with httpGET
// /dir:var, dynamic
app.get("/saludo/:nombre", (req, res) => {
    let nombre = req.params.nombre
    res.send(`Hola ${nombre} bienvenido a mi API`)
})

app.get("/login", (req, res) => {
    res.json(
        {
            "mensaje": "welcome"
        }
    )
})

app.get("/register", (req, res) => {
    res.send("Ahora estas en REGISTER")
})

// Leventamos servidor en escucha, en port

app.listen(port, () => console.log(`Servidor levantado en puerto ${port}`))

app.post('/register', (req, res) => {
    // Obtengo los datos del body
    let usuario = req.body

    res.send(`Hola ${usuario.nombre}, se que tu email es ${usuario.email} y tu edad es ${usuario.edad} `)
})