import fs from 'fs';
import readline from 'readline';

// fs.readFile('./access_tmp.log.txt', (ree, data) => {
//     const array = data.toString().split('\n');
//     const regExp = /(89\.123\.1\.41)|(34\.48\.240\.111)/;
//     const regExp2 = /\d+\.\d+\.\d+\.\d+/;
//     const newArray = array.filter(arr => regExp.test(arr));
//     newArray.map(arr => {
//         let url = arr.match(regExp2)[0];
//         fs.writeFile(`./%${url}%_requests.log`, '\n' + arr, {encoding: 'utf-8', flag: 'a'}, (err, data) =>{
//             if (err) {
//                 console.log('error', err)
//             }
//         });
//     })
// })

const readStream = fs.createReadStream('./access_tmp.log.txt', 'utf-8');
const writeStream1 = fs.createWriteStream('./89.123.1.41_requests.log', 'utf-8');
const writeStream2 = fs.createWriteStream('./34.48.240.111_requests.log', 'utf-8');

let numStr = 0;
const rl = readline.createInterface({
    input: readStream,
    terminal: true
});
rl.on('line', (line) => {
    if (line.includes('89.123.1.41')) {
        writeStream1.write(line + '\n')
    }
    if (line.includes('34.48.240.111')) {
        writeStream2.write(line + '\n')
    }
    console.log(++numStr);
})