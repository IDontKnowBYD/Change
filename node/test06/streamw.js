'use strict';
var fs = require('fs');

var ws1 = fs.createWriteStream('output1.txt','utf-8');
ws1.write('使用stream写入数据1');
ws1.write('end');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt','utf-8');
ws2.write('使用stream写入数据2');
ws2.write('end');
ws2.end();

