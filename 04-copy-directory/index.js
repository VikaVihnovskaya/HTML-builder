function copyDir() {
  const fs  = require('fs');
  const path = require('path');
  const copyFolderPath = path.join(__dirname, 'files-copy');
  const folderPath = path.join(__dirname, 'files');
  fs.mkdir(copyFolderPath, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.log(err);
        }
        else {
          files.forEach((file) => {
            fs.copyFile(path.join(folderPath, file), path.join(copyFolderPath, file), (err) => {
              if (err) {
                console.log(err);
              }
            });
          });
        }
      });
    }
  });
}
copyDir();