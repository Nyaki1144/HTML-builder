const fs = require('fs');
const path = require('path');

const preojectDist = path.join(__dirname, 'project-dist');
const templatePath = path.join(__dirname, 'template.html');
const componentsPath = path.join(__dirname, 'components');
const dirPath= path.join(__dirname, "styles");
const dirPathcopy = path.join(__dirname, 'project-dist', 'style.css');
const templateCopyPath = path.join(__dirname, 'project-dist', 'template.html')

fs.mkdir(preojectDist, { recursive: true }, (err) => {
    if (err) throw err;
  });

fs.readFile(templatePath, (err, data) => {
    fs.writeFile(templateCopyPath, data, () => {});
})



function buildFile(){
        fs.readdir(componentsPath, (err, dataDIr) => {
        fs.readFile(templateCopyPath, async (err, data) => {
        let str = (data.toString())

        dataDIr.forEach(el => {
                let name = el.slice(0, el.length-5);
                const compFileName = path.join(__dirname, 'components', el);
                fs.readFile(compFileName, (err, dataCom) => {
                    str = str.replace(`{{${name}}}`, dataCom)
                })
            });
        function addText(){fs.writeFile(templateCopyPath, str, ()=>{})}
        setTimeout(addText, 1000)
        });
    });
}

setTimeout(buildFile, 1000)

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


function copyDir(start, end){
    const dirPath= path.join(__dirname, start);
    const dirPathcopy = path.join(__dirname, 'project-dist', end);
    fs.mkdir(dirPathcopy, () => {})
    fs.readdir(path.join(__dirname, 'assets'), 
        (err, data) => {
        data.forEach(
            el => {
                fs.mkdir(path.join(path.join(__dirname, 'project-dist','assets', el)), () => {});
            }
        )}
    );
}

copyDir('assets', 'assets')

const pathFontsNew = path.join(__dirname, 'project-dist', 'assets', 'fonts');
const pathImgNew = path.join(__dirname, 'project-dist', 'assets', 'img');
const pathSvgNew = path.join(__dirname, 'project-dist', 'assets', 'svg');

const pathFonts = path.join(__dirname, 'assets', 'fonts');
const pathImg = path.join(__dirname, 'assets', 'img');
const pathSvg = path.join(__dirname, 'assets', 'svg');

copyAsetss(pathFonts, pathFontsNew)
copyAsetss(pathImg, pathImgNew)
copyAsetss(pathSvg, pathSvgNew)

function copyAsetss(start, end){
    fs.readdir(start, 
        (err, data) => {
        data.forEach(
            el => {
                if(el.match(/.jpg$|.woff2$|.svg$/gm) ){
                    fileStreamRead = fs.createReadStream(path.join(start, el));
                    fileStreamWrite = fs.createWriteStream(path.join(end, el));
                    fileStreamRead.pipe(fileStreamWrite); 
                }
            }
        )}
    );
}
