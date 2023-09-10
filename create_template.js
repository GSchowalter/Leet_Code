#!/usr/local/bin/node

var fs = require("fs");
var template_content = fs.readFileSync("template.js")
fs.writeFileSync(process.argv[2], template_content );