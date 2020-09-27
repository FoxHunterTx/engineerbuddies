const bcrypt = require('bcryptjs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stout
});
let password;
let countercheck = 'bonnie';

const test = bcrypt.hash(countercheck,12).then((hashpassword)=>{
    console.log('hash: ' + hashpassword);
});

// console.log('test: ',test);

//console.log('starting encryption');
//readline.question('Plain password:',(name) =>{
//    password = name;
//    readline.close();

//    const newhash = bcrypt.hash(password,12).then((hashpassword)=>{
//        console.log('hash: ' + hashpassword);
//    })
// }
//);
