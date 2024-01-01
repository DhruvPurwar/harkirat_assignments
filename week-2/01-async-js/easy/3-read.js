const fs = require('fs');

fs.readFile('3-read-from-file.md', 'utf8', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('File contents:', data);
});

console.log("Hi there");
for(let i=0;i<1000000000;i++){}
console.log("Hi there");
console.log("Hi there");
console.log("Hi there");