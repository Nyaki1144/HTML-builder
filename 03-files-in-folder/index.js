
const fs = require('fs');
const path = require('path')


const pathFile = (path.join(__dirname, 'secret-folder'))


const files =  fs.readdir(pathFile, 
        (err, data) => {
          data.forEach(el => getFileInfo(el))

        });

function getFileInfo(file){
  const pathFileName = path.join(__dirname, 'secret-folder', file);
  fs.stat(pathFileName, (err, stats) => {
    (!stats.isDirectory()) ? console.log(getFileAndIndexName(file), convertBytes(stats.size)) : null;
  });
}

function getFileAndIndexName(file){
  let arr = file.split('.');
  let str = `${arr[0]} - ${arr[1]} -`
  return (str)
}

function convertBytes(sizeFile){
  let num = `${sizeFile/1024}kb`;
  return num
}