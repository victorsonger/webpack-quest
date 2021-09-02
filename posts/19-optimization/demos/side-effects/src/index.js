import { alpha } from "../modules/module"; // 引入一个有package.json的module

import { gama } from "./insideMododule"; // 引入项目内部的一个文件导出

console.log(alpha); // 如果只是引入没有使用 也是可以treeShaking的
console.log('gama', gama);
