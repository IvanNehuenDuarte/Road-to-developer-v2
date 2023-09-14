                //* fs Sync

const fs = require('fs');

// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt')

// console.log(first);
// console.log(second.toString());

// const title = 'Este es el contenido de el archivo 4'

// //* flag: 'a' lo que hace es poder agregar contenido nuevo al archivo sin que se sobreescriba
// fs.writeFileSync('./data/fourth.txt', title, {
//     flag: 'a'
// })

                //* fs Async

fs.readFile('./data/first.txt', (error, data) => {
    if (error){
        console.log('hubo un error');
    }
    console.log(data.toString());

    fs.readFile('./data/second.txt', (error, data) => {
        if (error){
            console.log('hubo un error');
        }
        console.log(data.toString());

        fs.writeFile('./data/newFile.txt', 'archivo creado con writeFile desde fs', (error, data) => {
            console.log(error);
            console.log(data.toString());

            fs.writeFile('./data/newFile2.txt', 'archivo creado con writeFile desde fs', (error, data) => {
                console.log(error);
                console.log(data.toString());
                
                fs.writeFile('./data/newFile3.txt', 'archivo creado con writeFile desde fs', (error, data) => {
                    console.log(error);
                    console.log(data.toString());
                })
            })
        })
    })
})
