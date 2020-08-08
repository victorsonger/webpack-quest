import _ from 'lodash';

const demoName = 'Plugin HTML'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Webpack Demo', demoName], ': ');

  return element;
}

document.body.appendChild(component());