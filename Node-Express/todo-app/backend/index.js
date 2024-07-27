const express = require("express");
const app = express();
const dotenv = require("dotenv"); // npm i dotenv
const router = require("./routes/api");
const cors = require("cors");
const { requestLogger } = require("./middleware/requestLog");

dotenv.config();
const port = process.env.SERVER_PORT;

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCh"]
}))

app.use(express.json({limit: "50mb"}));
app.use(requestLogger);

app.use("/file", express.static("public/files"));
app.use("/image", express.static("public/images"));
app.use(express.urlencoded({extended: true}))
app.get("/", (req, res)=>{
    res.send("Welcome to out application");
})


app.use("/api", router);

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})