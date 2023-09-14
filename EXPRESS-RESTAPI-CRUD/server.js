const express = require("express");
const morgan = require("morgan");

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 3000,
  },
];

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send(newProduct);
});

app.put("/products/:id", (req, res) => {
  const newData = req.body; 

  const productFound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productFound) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  //* RECORRE EL ARREGLO DE PRODUCTOS, POR CADA PRODUCTO COMPARA SU PROPIEDAD ID, SI ES TRUE ("?" SIGNIFICA SI ES TRUE), COPIAMOS LOS PRODUCTOS Y ACTUALIZALOS CON LOS NUEVOS QUE MANDARON AL BODY, CASO CONTRARIO VAS A CONSERVAR LOS PRODUCTOS COMO ESTÁN (":" IGUAL A ELSE).
  products = products.map((p) => p.id === parseInt(req.params.id) ? {...p, ...newData} : p);

  res.json({
    message: "Product update successfully"
  })
});

app.delete("/products/:id", (req, res) => {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productFound) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products = products.filter((p) => p.id !== parseInt(req.params.id))

  res.sendStatus(204)
});
app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const productFound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productFound) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  console.log(productFound);
  res.json(productFound);
});

app.listen(3000);

console.log(`Server on port ${3000}`);
