/** 
 * @author Kevin
 * @version 1.0.0
 *
 * Controlador de carrito de compras
 * Este archivo define los controladores del carrito de compras
 */

const { response, request } = require('express');
const prisma = require('../../prisma/prismaClient.js');


const ShowShoppingCar = async (req = request, res = response) => {
    const { id } = req.params;

    const shoppingCar = await prisma.shopping_car.findUnique({
        where: { id: Number(id) },
        include: { products: true } 
    })
    .catch(err => {
        return res.status(500).json({ error: err.message });
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        shoppingCar
    });
};

const AddProduct = async (req = request, res = response) => {
    const { shoppingCarId, productId } = req.body;

    const shoppingCar = await prisma.shopping_car.update({
        where: { id: shoppingCarId },
        data: {
            products: {
                connect: { id: productId }
            }
        }
    })
    .catch(err => {
        return res.status(500).json({ error: err.message });
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        message: "Product added to shopping cart",
        shoppingCar
    });
};

const DeleteProduct = async (req = request, res = response) => {
    const { shoppingCarId, productId } = req.body;

    const shoppingCar = await prisma.shopping_car.update({
        where: { id: shoppingCarId },
        data: {
            products: {
                disconnect: { id: productId }
            }
        }
    })
    .catch(err => {
        return res.status(500).json({ error: err.message });
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        message: "Product removed from shopping cart",
        shoppingCar
    });
};


module.exports = {
    ShowShoppingCar,
    AddProduct,
    DeleteProduct,
};
