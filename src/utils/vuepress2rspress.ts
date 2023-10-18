const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function vuepress2rspress() {
    const postsPath = path.join(__dirname, '../../docs/posts');

    traverseDirectory(postsPath);

    console.log('Conversion completed!');
}

function readMetadataFromFile(filePath, fileName) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const contentLines = fileContent.split('\n');

    let meta = contentLines;
    let insideMetaBlock = false;

    for (let i = 0; i < contentLines.length; i++) {
        const line = contentLines[i];

        if (line.trim() === '---' && !insideMetaBlock) {
            insideMetaBlock = true;
        } else if (line.trim() === '---' && insideMetaBlock) {
            // End of meta block
            for (let j = i + 1; j < contentLines.length; j++) {
                meta += contentLines[j] + '\n';
            }
            break;
        } else if (line.startsWith('# ')) {
            return meta;
        }
    }

    let titleIndex = meta.indexOf('title');
    let metatitle = '';
    if (titleIndex !== -1) {
        const commaIndex = meta.indexOf(',', titleIndex);
        if (commaIndex !== -1) {
            metatitle = meta.substring(titleIndex + 'title:'.length, commaIndex).trim();
        }
    }

    if (!meta || !meta.trim().includes('# ')) {
        const title = `# ${metatitle}${fileName.replace(/\.md$/, '')}`;
        let firstContentIndex = contentLines.findIndex((line) => line.trim() === '---');
        if (firstContentIndex !== -1) {
            let secondContentIndex = contentLines.findIndex((line, index) => index > firstContentIndex && line.trim() === '---');
            if (secondContentIndex === -1) {
                // If the second '---' is not found, insert after the first '---'
                secondContentIndex = firstContentIndex + 1;
            }
            contentLines.splice(secondContentIndex+1, 0, `\n${title}`);
        } else {
            // If no '---' is found, add the title after metadata
            let metadataEndIndex = contentLines.findIndex((line) => line.trim() === '---');
            if (metadataEndIndex !== -1) {
                contentLines.splice(metadataEndIndex + 1, 0, title);
            }
        }
        fs.writeFileSync(filePath, contentLines.join('\n'));
    }



    return meta.trim();
}

function extractTitleFromMetadata(metadata, fileName) {
    try {
        const data = yaml.load(metadata);
        return data.title || fileName;
    } catch (error) {
        return fileName;
    }
}

function traverseDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    const metaFilePath = path.join(directoryPath, '_meta.json');
    const parentDirectory = path.basename(path.dirname(directoryPath));

    let hasMdFile = false;

    let meta = [];
    let indexContent = '';

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            const subDirectoryMeta = traverseDirectory(filePath);
            if (subDirectoryMeta.length > 0) {
                // 仅当子目录包含 .md 文件时才添加文件夹信息
                meta.push({
                    type: 'dir',
                    name: path.basename(filePath),
                    label: path.basename(filePath),
                    // children: subDirectoryMeta
                });
            }
        } else if (stats.isFile() && file.endsWith('.md')) {
            hasMdFile = true;

            if (file === 'index.md') {
                // 读取 index.md 的内容
                indexContent = fs.readFileSync(filePath, 'utf8');
            } else if (file === 'README.md') {
                // 读取 README.md 的内容并写入 index.md
                const readmeContent = fs.readFileSync(filePath, 'utf8');
                indexContent = readmeContent;
            } else {
                const nameWithoutExtension = path.basename(file, '.md');
                const metadata = readMetadataFromFile(filePath, nameWithoutExtension);
                const title = extractTitleFromMetadata(metadata, nameWithoutExtension);
                // console.log(`Title from ${file}:\n${title}`);
                meta.push(nameWithoutExtension);
            }
        }
    });

    if (hasMdFile && !fs.existsSync(path.join(directoryPath, 'index.md')) && indexContent) {
        // 只有存在 .md 文件、没有 index.md 文件、且有内容时才写入 index.md
        fs.writeFileSync(path.join(directoryPath, 'index.md'), indexContent);
    }

    if (meta.length > 0) {
        fs.writeFileSync(metaFilePath, JSON.stringify(meta, null, 2));
        // console.log(`Created _meta.json in ${directoryPath}`);
    }

    return meta;
}

vuepress2rspress();
