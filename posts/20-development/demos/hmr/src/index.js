import _ from "lodash";
import demoName from "./demoName";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Webpack Demo", demoName], ": ");

  return element;
}

let element = component();

document.body.appendChild(element);
console.log('module-----', module);


// 如果不写下面的监听逻辑的话，则模块改变的时候，还是会整个页面重载的
if (module.hot) {
  console.log('module+++++++', module);
  module.hot.accept("./demoName", function () {
    console.log('inininininsinss++++++', module);
    console.log("Accepting the updateds demoName module!");
    console.log(demoName);

    document.body.removeChild(element);

    element = component();

    document.body.appendChild(element);
  });
}
