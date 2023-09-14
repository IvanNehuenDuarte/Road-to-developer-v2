//* Podemos hacer una constante para extraer todos los archivos o una constante con un objeto donde podemos extraer cada archivo por separado
const web = require('./module/myModule');
const {myArray, user} = require('./module/myModule');

console.log(web);

console.log(myArray);
console.log(user);