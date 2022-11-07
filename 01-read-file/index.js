const fs = require("fs");
const path = require("path");

const stream = fs.createReadStream(path.resolve(path.dirname(__filename), "text.txt"), "utf-8");

let allText = '';

stream.on("data", 
  chunk => {
    console.log("Получаю данные...");
    allText += chunk;
    console.log(allText);
  }
);
stream.on("end", 
  () => {
    console.log("Все данные полностью получены");
  }
);
stream.on("error",
  error => {
    console.log("Была получена следующая ошибка: ", error.message);
  }
);