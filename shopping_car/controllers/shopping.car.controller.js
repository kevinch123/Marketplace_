/**
 * @author KevinCh
 * 
 * Controller from shopping car
 * In this file defines the shopping cart controllers
 */
const{response,request} = require('express');

const AddProduct = async(req=request, res=response) =>{
    res.json({
        "Saludo":"Soy agregar productos"
    });
};
const DeleteProducts = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy Eliminar productos"
    });
};
const CalculateTotal = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy calcular total"
    });
};

const CheckOut = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy verificar productos"
    });
};

module.exports={
    AddProduct,
    DeleteProducts,
    CalculateTotal,
    CheckOut,
}