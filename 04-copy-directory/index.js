const fs = require('fs');
const path = require("path");

const fileDir = path.dirname(__filename);//путь к директории с текущим файлом
const from = path.resolve(fileDir, "files");//исходная папка
const to = path.resolve(fileDir, "files-copy");//целевая папка

fs.readdir(to, (err, items) => {
  if (err) {
    console.log(err.code);

    fs.mkdir(to, err => {
      console.log(`\nПапка для копирования файлов была успешно создана:\n\n`);
    });
  } else {
    // console.log(`\nФайлы в папке "${to}" прочитаны удачно\n`);

    for (let i=0; i<items.length; i++) {
      let fileCurrent = items[i];
      const dest = path.resolve(to, fileCurrent);

      fs.rm(dest, (err) => {
        // console.log(`Файл "${fileCurrent}" был удален\n`);
        console.log("Удаляю");
      });
    }
  }
});

fs.readdir(from, (err, items) => {

  for (let i=0; i<items.length; i++) {
    let fileCurrent = items[i];
    const src = path.resolve(from, fileCurrent);
    const dest = path.resolve(to, fileCurrent);

    fs.copyFile(src, dest, (err) => {
      // console.log(`\nФайл "${fileCurrent}" был успешно скопирован из этой папки >>> ${from}\nв эту папку >>> ${to}\n`);
      console.log("Копирую");
    });
  }
});
