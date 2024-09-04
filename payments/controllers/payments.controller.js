/** 
*@author zarel
*@version 1.0.0
*
*Controlador de pagos
*Este archivo define los controladores de pagos
*/
const {response,request} = require ('express')

const ProcessPayments = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy la respuesta de procesar pagos"
    });

};

const ReturnPayment = async(req=request, res=response)=>{
    res.json({
        "saludo":"Soy la respuesta de retornar pago"
    });

};

module.exports = {
    ProcessPayments,
    ReturnPayment,
};