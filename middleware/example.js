const app = require('express')()

app.get("/", (req, res) => {
  res.send("hello world!");
});
n
module.exports = app
