const express = require("express");
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

//first mount dotenv then run require database otherwise MONGO_DB URL will be undefined
const database = require("./config/database");

const chatRoutes = require("./routes/chatRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use("/api/v1", chatRoutes);

app.listen(PORT, ()=>{
    console.log(`server started at port: ${PORT}`);
})


database.connect();

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Server is up and running"
    })
})