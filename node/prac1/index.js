const fs = require("fs");

// fs.writeFile("message.txt","pew",(err)=>{
//     if(err) throw err;
//     console.log("done");
// });

fs.appendFile("message.txt", "pew\n", (err) => {
    if (err) throw err;
    console.log("Appended to file.");
});


fs.readFile("message.txt", 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
