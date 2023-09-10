#!/usr/local/bin/node

var fs = require("fs");
var template_content = fs.readFileSync("template.js")
fs.mkdirSync(process.argv[2])
fs.writeFileSync(process.argv[2] + "/" + process.argv[2] + ".js", template_content );