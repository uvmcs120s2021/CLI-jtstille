const express = require("express")
const app = express()

app.get("/argv", (req, res) => res.json(process.argv))
app.get("/args", (req, res) => res.json(process.argv.splice(2)))

app.get("/secrets", (req, res) => res.sendFile("secrets.html", {
    root: __dirname
}))

app.get("/", (req, res) => res.sendFile("index.html", {
    root: __dirname
}))

app.listen(8000)
