import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

const day = new Date();
var dayw = day.getDay();
console.log(dayw);

app.get("/", (req, res) => {
  if (dayw === 0 || dayw === 6) {
    res.send("<h1>it is a weekend");
  } else {
    res.send("<h1>it is a weekday");
  }
});

app.listen(port, () => {
  console.log("meow");
});
