const fs = require("fs");
const path = require("path");

const process = require("process");
const { stdin, stdout } = process;

const fileDir = path.dirname(__filename);
const fileName = "text.txt";
const fullPath = path.resolve(fileDir, fileName);

const stream = fs.createWriteStream(fullPath);

stdout.write("Привет! Введи текст для записи\nДля завершения введи команду 'exit'\nили нажми сочетание клавиш 'ctrl+c'\n\n");

stdin.on("data", (data) => {
  console.log("\n");
  let text = data.toString().trim();

  if (text === "exit") process.exit();
  stream.write(text);
  console.log("Введи дополнительный текст для записи\n");
});

process.on('SIGINT', () => process.exit());
process.on('exit', (code) => console.log("Пока :)\n"));