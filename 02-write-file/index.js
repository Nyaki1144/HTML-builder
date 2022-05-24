const {stdout, stdin} = require('process');
const process = require('process');
const fileOfPath = __dirname + '/text.txt';
const fs = require('fs');

fs.stat(fileOfPath, (err, res) => {
    if(!res){
        fs.open(fileOfPath, 'w', (err, data) =>{});
    }else {
        return
    }
})

stdout.write('Приветствую путник!\nНапиши свое послание!\n');

stdin.on('data', data => {
    let str = data.toString();
    str.match(/exit|^C/) ? process.exit():
    fs.appendFile(fileOfPath, data, () => {})
});

process.on('exit', () => stdout.write('Удачи в изучении Node.js!\n'));
