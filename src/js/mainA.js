import moduleA from './moduleA';
import moduleB from './moduleB';
import style1 from './../css/style1.css';
import style2 from './../css/style2.css';

document.body.appendChild(moduleA('123456',style1.class1,style2.class1));

// HMR interface
if(module.hot) {
  // Capture hot update
  module.hot.accept('./moduleB', () => {
    console.log('这个组件已经修改, 局部刷新已完成');
    moduleB.log();
  });
}