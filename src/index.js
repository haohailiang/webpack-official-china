import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('开发环境的代码');
}

if (process.env.NODE_ENV == 'production') {
  console.log('生产环境的代码!');
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());