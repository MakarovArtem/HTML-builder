const fs = require('fs');
const path = require("path");

const fileDir = path.dirname(__filename);
const folderName = "secret-folder";
const fullPath = path.resolve(fileDir, folderName);

fs.readdir(fullPath, (err, items) => {
  if (err) console.log(`\nБыла получена следующая ошибка:\n${err.message}\n\n`);
  console.log(`\nВ папке "${fullPath}" находятся следующие файлы:\n`);
  for (let i=0; i<items.length; i++) {
    
    fs.stat(path.resolve(fullPath, items[i]), (err, stats) => {
      if (err) console.log(`\nБыла получена следующая ошибка:\n${err.message}\n\n`);
      
      let fileCurrent = items[i];
      let fileWeight = Math.ceil(stats["size"]*1000/1024)/1000;
      let fileExt = path.extname(fileCurrent).substring(1);
      let fileName = path.basename(fileCurrent, fileExt);
      console.log(`${fileName} - ${fileExt} - ${fileWeight}kb\n`);
    });
  }
});