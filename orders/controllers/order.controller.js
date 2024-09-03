/** 
*@author kevin
*@version 1.0.0
*
*Controlador de pedidos
*Este archivo define los controladores de pedidos
*/
const {response,request} = require ('express')

const ShowOrders = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy la respuesta de mostrar pedidos"
    });

};

const ShowOrder = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy mostrar pedidos"
    });

};

const AddOrders = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy agregar pedidos"
    });

};

const EditOrders = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy editar pedidos"
    });

};
const DeleteOrders = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy eliminar pedidos"
    });
};


module.exports = {
    AddOrders,
    ShowOrders,
    ShowOrder,
    EditOrders,
    DeleteOrders,
};