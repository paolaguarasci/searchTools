const fs = require("fs");
const path = require("path");
const single = require('./single');

exports.search = function (files, key) {
  for (let i in files) {
    // process.stdout.write("Searching on " + files[i] + "... ");
    single.search(files[i], key);
    // process.stdout.write("\n");
  }
};

exports.readDir = function (dir) {
  return fs.readdirSync(dir).filter(function (element) {
    return fs.statSync(element).isFile();
  });
};
