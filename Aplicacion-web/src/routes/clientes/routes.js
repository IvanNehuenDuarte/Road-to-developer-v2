const express = require('express');

const respuestas = require('../../red/respuestas');
const controlador = require('./index');

const router = express.Router();

router.get('/', all)
router.get('/:id', one)
router.post('/', add);
router.delete('/', remove)

async function all(req, res) {
    try {
        const items = await controlador.all()
        respuestas.success(req, res, items, 200)
    } catch (err) {
        respuestas.error(req, res, err, 500)
    }
};

async function one(req, res) {
    try {
        const items = await controlador.one(req.params.id)
        respuestas.success(req, res, items, 200)
    } catch (err) {
        respuestas.error(req, res, err, 500)
    }
};

async function add(req, res, next) {
    try {
        const items = await controlador.add(req.body)
        if (req.body.id == 0) {
            mensaje = 'Item guardado con exito';
        } else {
            mensaje = 'Item actualizado con exito';
        }
        respuestas.success(req, res, mensaje, 201)
    } catch (err) {
        next(err);
    }
};

async function remove(req, res, next) {
    try {
        const items = await controlador.remove(req.body)
        respuestas.success(req, res, 'items eliminado satisfactoriamente', 200)
    } catch (err) {
        next(err);
    }
};



module.exports = router;