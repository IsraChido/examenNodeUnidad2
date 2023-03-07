const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");

router.get("/luz",(req,res)=>{
    const valores = {
        recibo:req.query.recibo,
        nombre:req.query.nombre,
        domicilio:req.query.domicilio,
        precio:req.query.precio,
        tipo:req.query.tipo,
        kilowatts:req.query.kilowatts
    }
    res.render('luz.html', valores);
})

router.post("/luz",(req,res)=>{
    const valores = {
        recibo:req.body.recibo,
        nombre:req.body.nombre,
        domicilio:req.body.domicilio,
        precio:req.body.precio,
        tipo:req.body.tipo,
        kilowatts:req.body.kilowatts
    }
    res.render('luz.html', valores);
})

router.get("/contactos",(req,res)=>{
    const valores = {
        recibo:req.query.recibo
    }
    res.render('contactos.html', valores);
})

router.get("/acercaDe",(req,res)=>{
    const valores = {
        recibo:req.query.recibo
    }
    res.render('acercaDe.html', valores);
})

module.exports = router;