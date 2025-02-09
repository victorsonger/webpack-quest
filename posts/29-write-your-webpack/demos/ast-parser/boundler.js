const fs = require("fs");
const { parse } = require("@babel/parser");

const content = fs.readFileSync("./src/index.js", "utf-8");
const ast = parse(content, {
  sourceType: "module",
});

console.log(ast);
ast.program.body.forEach((item, index) => {
  console.log('ast body', index, item);
})
