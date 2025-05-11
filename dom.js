const pg = document.getElementsByClassName('message')
const output = document.getElementById('output')

const message = document.querySelectorAll('.message')

console.log('********DOM********');
console.log(pg);
output.innerHTML = message.length;

message.innerHTML = 'Hello World'