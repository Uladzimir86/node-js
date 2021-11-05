// import { rot } from "./index.js";
const func = require("./index.js");
let {rot, caesar, atbash} = func;
const str = 'abc ABC ччч z Z';
const arr = process.argv.slice(2);

if (arr[0] === '-c' || arr[0] === '--config') {
    const ciphers = arr[1]?.split('-');
    console.log(ciphers )

    if (ciphers) {
        console.log('item')

        ciphers.map(item => {
            switch (item) {
                case 'C0':
                    console.log('c0',caesar(false, str))
                    break;
                case 'C1':
                    console.log('c1',caesar(true, str))
                    break;
                case 'R0':
                    console.log('r0',rot(false, str))
                    break;
                case 'R1':
                    console.log('r1',rot(true), str);
                    break;
                case 'A':
                    console.log('a',atbash(str))
                    break;
                default: throw new Error('hernja napisana1');

            }
        })
    } else throw new Error('hernja napisana3')


 

} else throw new Error('hernja napisana2')