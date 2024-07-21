const express = require("express");
const app = express();
const dotenv = require("dotenv"); // npm i dotenv
const router = require("./routes/api");
const cors = require("cors");

dotenv.config();
const port = process.env.SERVER_PORT;

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCh"]
}))
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to out application");
})

app.use("/api", router);

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})