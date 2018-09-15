const fs = require("fs");
const single = require('./single');
const multi = require('./multi');

const key = process.argv[2];
const path = process.argv[3];



if (fs.statSync(path).isDirectory()) {
  const files = multi.readDir(path);
  multi.search(files, key);
} else {
  single.search(path, key);
}
