import fs from 'fs';

fs.readFile('./access_tmp.log.txt', (ree, data) => {
    const array = data.toString().split('\n');
    const regExp = /(89\.123\.1\.41)|(34\.48\.240\.111)/;
    const regExp2 = /\d+\.\d+\.\d+\.\d+/;
    const newArray = array.filter(arr => regExp.test(arr));
    newArray.map(arr => {
        let url = arr.match(regExp2)[0];
        fs.writeFile(`./%${url}%_requests.log`, '\n' + arr, {encoding: 'utf-8', flag: 'a'}, (err, data) =>{
            if (err) {
                console.log('error', err)
            }
        });
    })
})