import express from "express";
import fileUpload from "express-fileupload";
import { uploadFile } from "./s3.js";

const app = express();

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the server'
    })
})

app.post('/files', (req, res) => {
    console.log(req.files);
    
    res.json({
        message: 'uploaded file'
    })
})

app.listen(3000)
console.log(`Server listen on port ${3000}`);