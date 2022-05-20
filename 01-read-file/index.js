const fs = require('fs');


const readFile = new fs.ReadStream(__dirname + '/text.txt');

readFile.on('data', (data) => {
    console.log(data.toString())
});