const express = require("express");
const app = express();
const PORT =5000;
const requestapi = require("./requestapi.json");


app.get("/api/requestapi", (req, res) => {
  res.json(requestapi);
});

app.listen(PORT,(req, res)=> {
    console.log(`http://localhost:${PORT}`);
});

