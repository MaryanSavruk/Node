const fs = require('fs');
const path = require('path');
const util = require('util');

// eslint-disable-next-line no-unused-vars
const textPath = path.join(__dirname, 'dir', 'tex.txt');
// eslint-disable-next-line no-unused-vars
const TextPath2 = path.join(__dirname, 'dir', 'tex2.txt');

// const userWrite = fs.writeFile(textPath, "Some text", err => console.log(err));

// fs.writeFile(TextPath2, 'try to write somthing', err => {
//     console.log(err)
// });

// fs.appendFile(textPath, '\nNew info \n', err => {
//     console.log(err)
// });
// eslint-disable-next-line no-unused-vars
const appendPromise = util.promisify(fs.appendFile);
// eslint-disable-next-line no-unused-vars
const mkdir = path.join(__dirname, 'dir2', 'folder', 'retweet');
// eslint-disable-next-line no-unused-vars
const folderWithDeletedData = path.join(__dirname, 'dir2', 'folder', 'retweet', 'deleted.txt');
// fs.mkdir(mkdir, {recursive: true}, err => {  //створення папок з вкладеністю
//     console.log(err)
// })

// fs.readFile(textPath, (err, data) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data.toString())
// })

// fs.readdir(__dirname, (err, files) => {
//     if (err) {
//         console.log(err)
//     }
//     // console.log(files);
//     files.forEach(file => {
//         const filePath = path.join(__dirname, file);
//         fs.stat(filePath, (err1, stats) => {
//             console.log('-------------');
//             console.log(stats.isFile(), 'isFile');
//             console.log(stats.isDirectory(), 'isDirectory');
//             console.log('-------------');
//         })
//     })
// });

// fs.rmdir(mkdir, err => {
//     console.log(err);
// });

// fs.unlink(path.join(__dirname, 'dir2', 'folder', 'retweet', 'remov.txt'), err => {
//     console.log(err);
// });

// fs.rename(textPath, folderWithDeletedData, err => {
//     console.log(err);
// });

// for (let i = 0; i < 200; i++) {
//     appendPromise(folderWithDeletedData, i + ' ' + 'Text data from promisify fs \n')
//         .catch(reason => {
//             // console.log(reason);
//         });
// }

// const readStream = fs.createReadStream(folderWithDeletedData);
// const writeStream = fs.createWriteStream(TextPath2);
//
// console.time('STRM');
// readStream.on('data', chunk => {
//     writeStream.write(chunk);
//     console.log(chunk);
// });
// console.timeEnd('STRM');

// readStream.pipe(writeStream); // скорочений сиетакс для read-write
