const express = require("express");
const app = express();
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home page"); //400
});
app.get("/users", auth, (req, res) => {
  console.log("users page");
  res.send("users page");
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
function auth(req, res, next) {
  console.log("Auth");
  if (req.query.admin === "true") {
    next();
  } else {
    res.send("No auth");
  }
}
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
