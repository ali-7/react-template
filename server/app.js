const path = require("path");
const express = require("express");
const favicon = require("express-favicon");

const app = express();

app.use(favicon(path.join(__dirname, "..", "client", "build/favicon.ico")));

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/test-server", (req, res) => {
  res.json({ server: "check" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listen on port ${port}`));
