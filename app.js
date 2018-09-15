const fs = require("fs");
const path = require("path");
const key = process.argv[2];
const file = process.argv[3];

function searchSingle(file, key) {
  fs.readFile(file, "utf-8", (err, content) => {
    if (err) throw console.error(`ERROR Can't open ${file}`);
    if (content.includes(key)) {
      console.log(`${file}`);
    }
  });
}

searchSingle(file, key);
