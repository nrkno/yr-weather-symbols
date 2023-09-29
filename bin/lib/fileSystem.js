const path = require('path');
const fs = require('fs').promises;

async function createFolder(folderPath) {
  const resolvedFolderPath = path.resolve(folderPath);

  return fs.mkdir(resolvedFolderPath, { recursive: true });
}

async function writeFile({ fileName, content, outputFolder }) {
  const fullPath = path.resolve(outputFolder, fileName);

  return fs.writeFile(fullPath, content).then(() => {
    console.log('File written: ', fullPath.replace(path.resolve(), ''));
  });
}

module.exports = { createFolder, writeFile };
