import css from "./style.css";
import {sortBy} from 'lodash';
console.log('sortBy', sortBy);

function style(cssString) {
  const element = document.createElement("style");

  element.innerHTML = cssString;

  return element;
}

document.head.appendChild(style(css.toString()));

setTimeout(() => {
  import('./asyncAsset').then((asyncAsset) => {
    console.log('asyncAsset-----', asyncAsset);
    console.log('asyncAsset.default-----', asyncAsset.default);
  })
}, 3000)
