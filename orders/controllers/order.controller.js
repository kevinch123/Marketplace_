/** 
 * @author Kevin
 * @version 1.0.0
 *
 * Controlador de pedidos
 * Este archivo define los controladores de pedidos
 */

const { response, request } = require('express');
<<<<<<< HEAD
const prisma = require ('../../prisma/prismaClient')
=======
const prisma = require('../../prisma/prismaClient.js');
>>>>>>> 991890096a8735151738aee27547a498883be4a0

// Mostrar todas las órdenes
const ShowOrders = async (req = request, res = response) => {
    try {
        const orders = await prisma.orders.findMany();
        res.json({
            orders
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener órdenes', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
};

// Agregar una nueva orden
const AddOrders = async (req = request, res = response) => {
    const { total, orderDate } = req.body;
    try {
        const result = await prisma.orders.create({
            data: {
                total,
                orderDate: new Date(orderDate) // Conversión de cadena a objeto Date
            }
        });
        res.json({
            result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar orden', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
};

// Mostrar una orden específica por ID
const ShowOrder = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const result = await prisma.orders.findUnique({
            where: {
                id: Number(id)  // Aseguramos que sea un número
            }
        });

        if (!result) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }

        res.json({
            result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la orden', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
};

// Editar una orden por ID
const EditOrders = async (req = request, res = response) => {
    const { id } = req.params;
    const { total, orderDate } = req.body;
    try {
        const result = await prisma.orders.update({
            where: {
                id: Number(id)
            },
            data: {
                total,
                orderDate: new Date(orderDate)
            }
        });
        res.json({
            result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al editar la orden', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
};

// Eliminar una orden por ID
const DeleteOrders = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const result = await prisma.orders.delete({
            where: {
                id: Number(id)  // Aseguramos que sea un número
            }
        });
        res.json({
            result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la orden', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
};

module.exports = {
    AddOrders,
    ShowOrders,
    ShowOrder,
    EditOrders,
    DeleteOrders,
};
