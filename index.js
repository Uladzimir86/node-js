// // Caesar cipher
// // For encoding/decoding use only the English alphabet, all other characters should be kept untouched.
// const str = 'abc ABC ччч z Z';
// let isCoding = false;
module.exports.caesar = (isCoding = true, str = '') => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (/[a-z]/i.test(str[i])) {
            let letterCode = str[i].codePointAt();
    
            // coding
            if (isCoding) {
                switch (letterCode) {
                case 122: 
                    letterCode = 96;
                    break;
                case 90: 
                    letterCode = 64;
                    break;
                default: break;
                }
    
                result += String.fromCodePoint(letterCode + 1); 
            } else {
                switch (letterCode) {
                    case 97: 
                        letterCode = 123;
                        break;
                    case 65: 
                        letterCode = 91;
                        break;
                    default: break;
                    }
                result += String.fromCodePoint(letterCode - 1); 
    
            }
            
            // decoding
        } else result += str[i];
    }
    return result;
}

// console.log(result);


// Atbash cipher
// const str = 'abc ABC ччч z Z';
module.exports.atbash = (str = '') => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (/[a-z]/i.test(str[i])) {
            let letterCode = str[i].codePointAt();
    
            if (letterCode > 90) letterCode = 219 - letterCode;
            else letterCode = 155 - letterCode;
    
            result += String.fromCodePoint(letterCode); 
    
        } else result += str[i];
    }
    return result;
}

// console.log(result);


//ROT-8 as variation of ROT-13
//const str = 'abc ABC ччч z Z';

//let isCoding = false;
module.exports.rot = (isCoding = true, str = '') => {
    let result = '';
    for (let i = 0; i < str.length; i++) {  
        if (/[a-z]/i.test(str[i])) {
            let letterCode = str[i].codePointAt();

            // coding
            if (isCoding) {
                if (letterCode > 114 || (letterCode > 82 && letterCode < 91)) letterCode -= 26;
                result += String.fromCodePoint(letterCode + 8); 
            } else {
                if (letterCode < 73 || (letterCode > 96 && letterCode < 105)) letterCode += 26;
                result += String.fromCodePoint(letterCode - 8); 

            }
    
        // decoding
        } else result += str[i];
    }
    return result;
}

//console.log(result);