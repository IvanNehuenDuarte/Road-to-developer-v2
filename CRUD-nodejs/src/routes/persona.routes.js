import { Router } from "express";
import pool from "../database.js";

const router = Router();

//* Lista de personas
router.get("/list", async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM personas')
        res.render('personas/list', {personas: result} )
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//* Agregar personas
router.get("/add", (req, res) => {
    res.render("personas/add");
})

router.post("/add", async (req, res) => {
    try {
        const {name, lasname, age} = req.body;
        const newPersona = {name, lasname, age};
        await pool.query('INSERT INTO personas SET ?', [newPersona]);
        res.redirect('list');
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

//* Editar personas
router.get("/edit/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const [persona] = await pool.query('SELECT * FROM personas WHERE id =?', [id])
        const personaEdit = persona[0];
        res.render('personas/edit', {persona: personaEdit});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.post("/edit/:id", async (req, res) => {
    try {
        const {name, lasname, age} = req.body;
        const {id} = req.params;
        const editPersona = {name, lasname, age};
        await pool.query('UPDATE personas SET ? WHERE id = ?', [editPersona, id]);
        res.redirect('/list');
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

//* Eliminar personas
router.get("/delete/:id", async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query('DELETE FROM personas WHERE id = ?', [id]);
        res.redirect('/list');
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

export default router