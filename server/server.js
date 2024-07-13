const express = require("express");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const database = require("./config/database");
database.connect();



app.listen(PORT, ()=>{
    console.log(`server is up and running at port: ${PORT}`);
})