const fs = require('fs');
const path = require('path');



function copyDir(start, end){
    const dirPath= path.join(__dirname, start);
    const dirPathcopy = path.join(__dirname, end);

    fs.mkdir(dirPathcopy, () => {})
    fs.readdir(dirPath, 
        (err, data) => {
        data.forEach(
            el => {
                fileStreamRead = fs.createReadStream(path.join(dirPath, el));
                fileStreamWrite = fs.createWriteStream(path.join(dirPathcopy, el));
                fileStreamRead.pipe(fileStreamWrite);
            }
        )}
    );
}

copyDir('files', 'files-copy')
