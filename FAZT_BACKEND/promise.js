const {readFile} = require('fs/promises');
// const { promisify } = require('util');

//* Promisify ya no es necesario, fs viene con su propio modulo para promesas
// const readFilePromise = promisify(readFile);

//* leer archivo con promesa
// const getText = (pathFile) => {
//     return new Promise((resolve, reject) => {
//         readFile(pathFile, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(data);
//         })
//     })
// }

    //* Promesa y Manejo de errores con .then .catch
// getText('./data/first.txt')
//     .then(result => console.log(result))
//     .then(() => getText('./data/second.txt'))
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


    //* Async Await y Manejo de errores con try catch
async function read() {
    try {
        const result = await readFile('./data/first.txt', 'utf-8')
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

read();