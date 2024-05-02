import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

const day = new Date();
var dayw = day.getDay();
console.log(dayw);

// dayw = 0;
app.get("/", (req, res) => {
  if (dayw === 0 || dayw === 6) {
    res.render("index.ejs", {
      dayw: "a Weeknd",
      advice: "it's time to chill",
    });
  } else {
    res.render("index.ejs", {
      dayw: "a WeekDay",
      advice: "it's time to work",
    });
  }
});

app.listen(port, () => {
  console.log("meow");
});
