import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended:true}));
//app.use(morgan("tiny"));
app.use(logger);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
  console.log(req.body);

  res.send("<h1>Your band name is</h1><br> <h3>"+req.body.street+" "+req.body.pet);
  
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


function logger(req, res, next){
  console.log(req.url + " : "+ req.method);
  next();
}
