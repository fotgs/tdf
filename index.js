const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const tdf = require("./tdf");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send('visit <a style="color: red" href="./api/tdf">API</a> link');
});

app.get("/api/tdf", (req, res) => {
  res.json(tdf);
});

app.get("*", (req, res) => {
  res
    .status(404)
    .send(
      '<h2>Page not found</h2><p>Looking for <a style="color: red" href="./api/tdf">API</a> link?</p>'
    );
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
