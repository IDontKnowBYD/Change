var buf = new Buffer(256);
len = buf.write('aaaaa');

console.log('写入字节数:' + len);

buff = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buff[i] = i + 97;
}

console.log( buff.toString('ascii'));       
console.log( buff.toString('ascii',0,5));   
console.log( buff.toString('utf8',0,5));    
console.log( buff.toString(undefined,0,5));

var buffe = new Buffer('asdqqed');
var json = buffe.toJSON(buffe);

console.log(json);