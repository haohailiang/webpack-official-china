function createComponent(){
	var btn1 = document.createElement('button');
	var btn2 = document.createElement('button');
	var btn3 = document.createElement('button');
	btn1.innerHTML = 'button1';
	btn2.innerHTML = 'button2';
	btn3.innerHTML = 'button3';
	btn1.onclick = () => {
		import(/* webpackChunkName: "global" */ './global.js').then( sayHello => {
			sayHello('按需加载module.export:');
		}).catch(error => '加载组件1时发生错误!');
	}
	btn2.onclick = () => {
		import(/* webpackChunkName: "math" */ './math.js').then( module => {
			var print = module.default;
			print();
		}).catch(error => '加载组件2时发生错误!');
	}
	btn3.onclick = () => {
		import(/* webpackChunkName: "math" */ './math.js').then( module => {
			var cube = module.cube;
			console.log(cube(2));
		}).catch(error => '加载组件3时发生错误!');
	}

	document.body.appendChild(btn1);
	document.body.appendChild(btn2);
	document.body.appendChild(btn3);
}

createComponent();