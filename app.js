const express = require("express");
require("dotenv").config();

const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello JWT");
});

require("./models/db.js")

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});


