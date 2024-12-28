const fs = require("fs");
const ejs = require("ejs");


const main = async function () {
  const dataNpm = require(__dirname + "/npm.json");
  const output = await ejs.renderFile(__dirname + "/README.ejs.md", { data: dataNpm });
  fs.writeFileSync(__dirname + "/README.md", output, "utf8");
};

main();