require.ensure(['./moduleA.js'], function(require) {
  var content = require('./moduleA.js');
  document.open();
  document.write('<h1>' + content + '</h1>');
  document.close();
});