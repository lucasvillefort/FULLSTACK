const fs = require("fs");

const textin = fs.readFileSync("./text.txt", "utf-8");
console.log(textin);
