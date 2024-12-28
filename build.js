const fs = require("fs");
const ejs = require("ejs");

const reverseObjectKeys = function(obj) {
  const reversedObj = {};
  const keys = Object.keys(obj).reverse(); // Obtén las claves en orden inverso
  keys.forEach(key => {
    reversedObj[key] = obj[key]; // Añade las propiedades al nuevo objeto
  });
  return reversedObj;
}

const main = async function () {
  const dataNpm = reverseObjectKeys(require(__dirname + "/npm.json"));
  const output = await ejs.renderFile(__dirname + "/README.ejs.md", { data: dataNpm });
  fs.writeFileSync(__dirname + "/README.md", output, "utf8");
};

main();