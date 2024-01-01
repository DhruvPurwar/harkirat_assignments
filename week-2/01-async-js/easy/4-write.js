const fs = require('fs');

let data = 'Hello, this is a sample text to be written to a file.';

fs.writeFile('example.txt', data, 'utf8', (err) => {
  if (err) {
    console.error('An error occurred:', err);
  } else {
    console.log('File has been saved!');
  }
});
console.log("Starting ");