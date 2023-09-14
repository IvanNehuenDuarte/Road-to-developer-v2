const http = require("http");

const server = http.createServer((request, response) => {

  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcom to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("about");
    return response.end();
  }

  response.write(`<h1>Not Found</h1>
    <p>Esta página no se encontró<p>
    <a href="/">Volver a la página principal</a>
    `);
  response.end();
});

server.listen(3000);

console.log("servidor escuchando en el puerto 3000");
