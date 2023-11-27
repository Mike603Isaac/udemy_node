const fs = require("fs");

                      /* WRITE FILE*/
fs.writeFile("message.txt", "I Love You Jesus", "utf-8", (err) => {
  if (err) throw err;
    console.log("File has been saved!");
})


                /* READ FILE*/
fs.readFile("message.txt", 'utf-8', (err, data) => {
  if (err) throw err;
    console.log(data);
})



