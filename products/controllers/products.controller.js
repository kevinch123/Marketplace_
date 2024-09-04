/** 
*@author zarel
*@version 1.0.0
*
*Controlador de productos
*Este archivo define los controladores de productos
*/
const {response,request} = require ('express')

const AddProduct = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy la respuesta de añadir producto"
    });
};

const UpdateProduct = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy la respuesta de actualizar producto"
    });
};

const DeleteProduct = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy la respuesta de eliminar producto"
    });
};

const GetProduct = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy la respuesta de obtener producto"
    });
};

module.exports = {
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    GetProduct
};