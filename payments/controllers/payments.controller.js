/** 
*@author zarel
*@version 1.0.0
*
*Controlador de pagos
*Este archivo define los controladores de pagos
*/
const {response,request} = require ('express')
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ProcessPayments = async(req=request, res=response)=>{

    const { amount, method, date } = req.body;

    const result = await prisma.users.create({
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

    const result = await prisma.users.create({
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