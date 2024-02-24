const fs = require('fs');

const data = fs.readFileSync('./data.txt', 'utf8');
const data2 = fs.readFile('./data.txt', 'utf8', (err, data) => {
    console.log("readFile: " + data);
    console.log("readFile: " + err);
});
console.log(data);

const dir = fs.readdirSync('./');
console.log("Directory contents: ");
console.log(dir);