const converter = require('./converter.js');
const reader = require('readline-sync');

input = reader.question('Input a number you want to convert into binary and hexadecimal. ')
console.log(converter.convertToBinary(input));
console.log(converter.convertToHex(input));