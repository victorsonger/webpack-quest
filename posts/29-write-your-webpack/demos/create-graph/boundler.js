const fs = require("fs");
const path = require("path");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;

let ID = 0;

function createAsset(fileName) {
  const content = fs.readFileSync(fileName, "utf-8");
  const ast = parse(content, {
    sourceType: "module",
  });

  const dependencies = [];

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value);
    },
  });

  const id = ID++;

  return {
    id,
    fileName,
    dependencies,
  };
}

function createGraph(entry) {
  const graph = [createAsset(entry)];

  // 这个二层循环，里层循环会往外层循环的主体 graph 中不断地添加项目。
  // 初始时graph中只有一个项目（即entry文件对应的asset信息，但是随着其dependencies循环，graph中会被推入新的项目）
  // 本质上这是把一个递归改造成了循环
  for (const asset of graph) {
    const dirname = path.dirname(asset.fileName);

    asset.dependencies.forEach((dependencyRelativePath) => {
      const dependencyAbsolutePath = path.join(dirname, dependencyRelativePath);
      const dependencyAsset = createAsset(dependencyAbsolutePath);
      graph.push(dependencyAsset);
    });
  }

  return graph;
}

console.log(createGraph("./src/index.js"));
