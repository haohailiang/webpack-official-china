function createComponent(){
	var element = document.createElement('button');
	element.innerHTML = 'click me';
	element.onclick = () => {
		import(/* webpackChunkName: "global" */ './global.js').then( sayHello => {
			sayHello('按需加载:');
		}).catch(error => '加载组件时发生错误!');
	}

	document.body.appendChild(element);
}

createComponent();