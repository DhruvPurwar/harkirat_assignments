const fs = require('fs');

let content = fs.readFileSync('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
//   console.log('File contents:', data);
});

console.log(content);
let words= content.split(" ");
console.log(words);
let newData= "";
for(let i=0;i<words.length;i++){
    if(words[i]!== ''){
        newData= newData+words[i]+' ';
    }
}
// fs.writeFile(data.txt,newData,'utf-8,')
fs.writeFile('data.txt', newData, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      console.log('File has been saved!');
    }
  });