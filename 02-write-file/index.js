const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, '02-write-file.txt');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const writeStream = fs.createWriteStream(pathToFile);
console.log('Hello! Please, enter the text');
rl.on('line', (text) => {
  if (text === 'exit') {
    rl.close();
  }
  else {
    writeStream.write(text);
  }
});
rl.on('close', () => {
  console.log('Goodbye!');
  writeStream.end();
});
