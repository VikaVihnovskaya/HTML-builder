const fs = require('fs');
const path = require('path');

const pathToFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFolder, {withFileTypes: true}, (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach(file => {
      if (!file.isDirectory()) {
        let arr = [];
        arr = file.name.split('.');
        fs.stat(path.join(pathToFolder, file.name), {withFileTypes: true}, (err, stats) => {
              if (err) {
                throw err;
              }
              let size = stats.size / 1024 + 'kb';
              console.log(`${arr[0]} - ${arr[1]} - ${size}`);
            }
        )
      }
    })
  })

