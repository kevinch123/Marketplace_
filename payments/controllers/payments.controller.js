/** 
*@author zarel
*@version 1.0.0
*
*Controlador de pagos
*Este archivo define los controladores de pagos
*/
const {response,request} = require ('express')
<<<<<<< HEAD
const prisma = require ('../../prisma/prismaClient')
=======
const prisma = require('../../prisma/prismaClient.js');

>>>>>>> 991890096a8735151738aee27547a498883be4a0

const ProcessPayments = async(req=request, res=response)=>{

    const { amount, method, date } = req.body;

    const result = await prisma.payments.create({
        data: {
            amount,
            method,
            date
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });

};

const ReturnPayment = async(req=request, res=response)=>{

    const { amount, method, date } = req.body;

    const result = await prisma.payments.create({
        data: {
            amount,
            method,
            date
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });

};

module.exports = {
    ProcessPayments,
    ReturnPayment,
};