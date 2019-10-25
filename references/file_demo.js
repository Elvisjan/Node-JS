const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder has been created');
// });

// fs.writeFile(
//   path.join(__dirname, '/test', 
// 'hello.txt'), 
// 'Hello World', err => {
//   if (err) throw err;
//   console.log(`File written to ${__dirname}` );
//   fs.appendFile(
//     path.join(__dirname, '/test',
//    'hello.txt'),
//     'Hello Again World',
//      err => {
//     if (err) throw err;   
//   }
//   );
   
// });
 fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
   if (err) throw err;
   console.log(data);
 });
 
 fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hi.txt'),  (err) => {
   if (err) throw err;
   console.log('File renamed...');
 });