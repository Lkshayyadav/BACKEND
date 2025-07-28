const fs = require("fs");

// => (FILE WRITING)
// by using this code we will create a file in which the data will be putted
// fs.writeFile("b.txt","This is file name a.txt" ,function(err){
//     if (err) console.log(err);
//     else console.log("done");
// })

// => (APPEND FILE)
// by this we can add data in the same file
// fs.appendFileFile("a.txt","it is create in node js " ,function(err){
//     if (err) console.log(err);
//     else console.log("done");
// })
// by this the new line will be added in the code

// => (RENAME OF A FILE)
// by using this we can rename a file names
fs.rename("b.txt", "c.txt", function (err) {
  if (err) console.log(err);
  else console.log("done");
});

// => COPY FILE
// by this we can make a copy of a file where path we will give
fs.copyFile(
  "file name",
  "path of another file (./02/file name new )",
  function (err) {
    if (err) console.log(err);
    else consoleq.log("done");
  }
);

// => UNLINK :
fs.unlink("file name", function (err) {
  if (err) console.log(err);
  else console.log(removed);
});


fs.readFile();  