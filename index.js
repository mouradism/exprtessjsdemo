const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/someThing", (req, res) => {
  //http://localhost:8080/something?color1=10&color2=40
  let color1 = req.query.color1;
  let color2 = req.query.color2;
  res.send((parseInt(color1) * parseInt(color2)).toString(10)); //400
});
app.get("/user/:id", function (req, res) {
  res.send("user " + req.params.id);
});

function logger(req, res, next) {
  console.log("Log");
  next();
}

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
//app.listen(3000);

/*
app
  .use("/", (req, res, next) => {
    console.log("Request type/: ", req.method);
    next();
  })
  .get("/", (req, res) => {
    res.send("An alligator approaches!");
  })
  .use("/nest", (req, res, next) => {
    console.log("Request type: ", req.method);
    next();
  })
  .get("/nest", (req, res) => {
    res.send("An alligator approaches!");
  })
  .listen(3000, () => {
    console.log("Gator app listening on port 3000!");
  });
*/
