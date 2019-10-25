const url = require('url');

const myUrl = new URL('http://fadsfdafdsafsdaffsd.com/sdfsdf.html?id=23131&status=passive');

console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append('abc','456');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));