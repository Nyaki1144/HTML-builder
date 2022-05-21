const fs = require('fs');
const path = require('path');



    const dirPath= path.join(__dirname, "styles");
    const dirPathcopy = path.join(__dirname, 'project-dist', 'style.css');
    
    fs.open(dirPathcopy, 'w', (err, data) =>{});
    fs.readdir(dirPath, 
    (err, data) => {
        fileStreamWrite = fs.createWriteStream(path.join(dirPathcopy));

    data.forEach(
        el => {
            if(el.match(/.css$/gm)){
                fileStreamRead = fs.createReadStream(path.join(dirPath, el));
                fileStreamRead.pipe(fileStreamWrite); 
            }
        }
    )}
);

