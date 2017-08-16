var fs = require('fs');
var data = 'aaa';

var ws = fs.createWriteStream('output.txt');

ws.write(data,'UTF8');

ws.end();

ws.on('finish',function() {
	console.log('写入完成');
});

ws.on('error',function(err) {
	console.log(err.stack);
});

console.log('程序执行完毕');

