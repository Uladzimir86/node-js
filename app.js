const func = require("./index.js");
const fs = require('fs');

const {rot, caesar, atbash} = func;
let readableStream;
let writeableStream;

const arr = process.argv.slice(2);

if (arr[0] === '-c' || arr[0] === '--config') {

    if (arr[2] === '-i') readableStream = fs.createReadStream(arr[3], "utf8");
    if (arr[2] === '-o') writeableStream = fs.createWriteStream(arr[3]);
    if (arr[4] === '-o') writeableStream = fs.createWriteStream(arr[5]);
    
    const ciphers = arr[1]?.split('-');
    const coding = (text = '') => {
           let str = text;

    if (ciphers) {
        console.log('item')

        ciphers.map(item => {
            switch (item) {
                case 'C0':
                    console.log('c0',caesar(false, str))
                    str = caesar(false, str);
                    break;
                case 'C1':
                    console.log('c1',caesar(true, str))
                    str = caesar(true, str);
                    break;
                case 'R0':
                    console.log('r0',rot(false, str))
                    str = rot(false, str);
                    break;
                case 'R1':
                    console.log('r1',rot(true, str));
                    str = rot(true, str);
                    break;
                case 'A':
                    console.log('a',atbash(str))
                    str = atbash(str);
                    break;
                default: throw new Error('hernja napisana1');

            }
        })
    } else throw new Error('hernja napisana3')
    return str;
    }
 
// readableStream?.pipe(coding).pipe(writeableStream);
readableStream?.on("data", function(chunk){
    console.log('chunk',chunk)
    writeableStream?.end(coding(chunk));
});


} else throw new Error('hernja napisana2')







