const express = require("express");
const router = require("./routes/api");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to out application");
})

app.use("/api", router);

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})