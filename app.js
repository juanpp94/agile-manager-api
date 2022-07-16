require("dotenv").config();
const express =  require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");
//const dbConnect = require("./config/mongo");
const port = process.env.port || 3000;
app.use(cors());

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

dbConnect();