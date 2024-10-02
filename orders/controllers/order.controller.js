/** 
*@author kevin
*@version 1.0.0
*
*Controlador de pedidos
*Este archivo define los controladores de pedidos
*/

const { response, request } = require('express');
const prisma = require ('../../prisma/prismaClient')

// Mostrar todas las órdenes
const ShowOrders = async(req = request, res = response) => {
    const orders = await prisma.orders.findMany()
    .catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        orders
    });
};

// Agregar una nueva orden
const AddOrders = async(req = request, res = response) => {
    const { total, orderDate } = req.body;

    const result = await prisma.orders.create({
        data: {
            total,
            orderDate: new Date(orderDate)
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        result
    });
};

// Mostrar una orden específica por ID
const ShowOrder = async(req = request, res = response) => {
    const { id } = req.params;

    const result = await prisma.orders.findUnique({
        where: {
            id: Number(id)
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        result
    });
};

// Editar una orden por ID
const EditOrders = async(req = request, res = response) => {
    const { id } = req.params;
    const { total, orderDate } = req.body;

    const result = await prisma.orders.update({
        where: {
            id: Number(id)
        },
        data: {
            total,
            orderDate: new Date(orderDate)
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        result
    });
};

// Eliminar una orden por ID
const DeleteOrders = async(req = request, res = response) => {
    const { id } = req.params;

    const result = await prisma.orders.delete({
        where: {
            id: Number(id)
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        result
    });
};

module.exports = {
    AddOrders,
    ShowOrders,
    ShowOrder,
    EditOrders,
    DeleteOrders,
};
