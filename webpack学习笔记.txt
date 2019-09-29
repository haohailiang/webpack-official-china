>>初始化package.json文件
npm init

>>安装webpack[到当前文件夹]
npm install webpack@1.13.2 --save-dev

>>打开当前的目录
open .

>>手动压缩文件
webpack hello.js hello.bundle.js

>>css loader安装
sudo cnpm install css-loader -g

>>css-loader style-loader安装
sudo cnpm install css-loader style-loader --save-dev

>>命令行中条用css-loader style-loader
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'

>>监听不断的变化
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch

>>显示打包进度
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --progress

>>显示打包的模块
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --progress --display-modules

>>显示打包原因
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --progress --display-modules --display-reasons

>>
https://github.com/jantimon/html-webpack-plugin
http://webpack.github.io/docs/using-plugins.html
配置的详细参数
https://www.npmjs.com/package/html-webpack-plugin
sudo cnpm install html-webpack-plugin -g

压缩文件的配置参数
https://github.com/kangax/html-minifier#options-quick-reference

>>运行package.json当中的文件
npm run hehe

>>安装ES6转换语法工具
sudo cnpm install babel-loader --save-dev
sudo cnpm install babel-core --save-dev
sudo cnpm install babel-preset-es2015 -g

>>安装postcss-loader
sudo cnpm install postcss-loader --save-dev

>>安装less-loader
sudo cnpm install less-loader --save-dev
sudo cnpm install less --save-dev
sudo cnpm install file-loader --save-dev

>>安装 html-loader
sudo cnpm install html-loader --save-dev

>>安装ejs-loader
sudo cnpm install ejs-loader --save-dev

>>图片base64编码
sudo cnpm install url-loader --save-dev
