const fs = require('fs');
const path = require('path');

function deleteMetaFiles(directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file) => {
            const filePath = path.join(directoryPath, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                deleteMetaFiles(filePath);
            } else if (file === '_meta.json') {
                fs.unlinkSync(filePath);
            }
        });
    }
}

const targetDirectory = path.join(__dirname, '../../docs/posts');

deleteMetaFiles(targetDirectory);

console.log('Deletion completed!');
