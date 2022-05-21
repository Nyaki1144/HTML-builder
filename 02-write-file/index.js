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

stdout.write('de barev!\n');

stdin.on('data', data => {

    data.toString() === ('exit\n' || '^C') ? process.exit():
    fs.appendFile(fileOfPath, data, () => {})
});

process.on('exit', () => stdout.write('Удачи в изучении Node.js!\n'));

// process.on('exit', (err) => console.log('err'))