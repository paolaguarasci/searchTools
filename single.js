const fs = require("fs");
const path = require("path");
const key = process.argv[2];
const file = process.argv[3];

exports.search = function (file, key) {
  fs.readFile(file, "utf-8", (err, content) => {
    if (err) throw console.error(`ERROR Can't open ${file}`);
    if (content.includes(key)) {
      process.stdout.write("Key search found in " + file + "\n");
    }
  });
};
