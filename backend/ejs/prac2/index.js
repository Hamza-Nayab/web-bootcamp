import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.js");
});

app.post("/submit", (req, res) => {
  const num = req.body["fName"].length + req.body["lName"].length;
  res.render("index.js", {count : num});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
