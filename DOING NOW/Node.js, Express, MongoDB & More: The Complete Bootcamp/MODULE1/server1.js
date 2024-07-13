// fs.writeFileSync("./text.txt", "i am writing there");
// const textin = fs.readFileSync("./text.txt", "utf-8");
// console.log(textin);

// // use more no asynchronous way to having less error no-blocking
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) return console.log("ERROR");
//   console.log(data);
//   const data2 = "sdsdsdsdsdsdsdsd";
//   fs.writeFile("./text.txt", data2, "utf-8", (err) => {
//     if (err) return console.log("ERROR");
//     fs.readFile("./text.txt", "utf-8", (err, data) => {
//       if (err) return console.log("ERROR");
//       console.log(data);
//     });
//   });
// });

const fs = require("fs");
const http = require("http");
const url = require("url"); // to create a server

const data1 = fs.readFileSync(`${__dirname}/data.json`, "utf-8"); // it is into json format
const dataOBJ = JSON.parse(data1); // to be readable by me

// creating server
const server = http.createServer((req, res) => {
  console.log(req.url); // it will show the url
  const pathName = req.url;
  if (pathName === "/") {
    res.end("hello from the server");
  } else if (pathName === "/product") {
    res.end("this pathway is product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data1);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hellou world",
    }); // to put the error ovetr here
    res.end("<h1>this pathway is not found</h1>");
  }
});

server.listen(8080, () => {
  console.log("listenning to requests on port 8080...");
});
