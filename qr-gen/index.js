import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([{ message: "enter the website url", name: "url" }])
  .then((answers) => {
    let ans = answers.url;

    var img = qr.image(ans);
    var info = ans + ": ./imgs/" + ans + ".png";

    fs.appendFile("url.txt", info + "\n", (err) => {
      if (err) throw err;
      console.log("Data appended to url.txt");
    });

    img.pipe(fs.createWriteStream("./imgs/" + ans + ".png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
