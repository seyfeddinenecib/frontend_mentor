const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("."));
app.get("/", (req, res) => res.sendfile("./index.html"));
app.listen(port);
