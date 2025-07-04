// server.js
const express = require("express");
const app = express();
app.get("/", (_, res) => res.send("RDP Proxy is Live!"));
app.listen(3000, () => console.log("Listening on port 3000"));
