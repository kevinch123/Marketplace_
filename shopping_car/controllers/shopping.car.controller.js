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

const CalculateTotal = async (req = request, res = response) => {
    const { id } = req.params;

    const shoppingCar = await prisma.shopping_car.findUnique({
        where: { id: Number(id) },
        include: { products: true }
    });

    if (!shoppingCar) {
        return res.status(404).json({ message: "Shopping cart not found" });
    }

    const total = shoppingCar.products.reduce((sum, product) => sum + product.price, 0);

    res.json({
        total
    });
};

const CheckOut = async (req = request, res = response) => {
    const { id } = req.params;

    const shoppingCar = await prisma.shopping_car.findUnique({
        where: { id: Number(id) },
        include: { products: true }
    });

    if (!shoppingCar) {
        return res.status(404).json({ message: "Shopping cart not found" });
    }

    const order = await prisma.orders.create({
        data: {
            total: shoppingCar.products.reduce((sum, product) => sum + product.price, 0),
            orderDate: new Date(),
            products: {
                connect: shoppingCar.products.map(product => ({ id: product.id }))
            },
            shoppingCar: {
                connect: { id: shoppingCar.id }
            }
        }
    })
    .catch(err => {
        return res.status(500).json({ error: err.message });
    }).finally(async () => {
        await prisma.$disconnect();
    });

    // Optionally clear the shopping cart
    await prisma.shopping_car.update({
        where: { id: shoppingCar.id },
        data: { products: { disconnect: shoppingCar.products.map(product => ({ id: product.id })) } }
    });

    res.json({
        message: "Checked out successfully",
        order
    });
};

module.exports = {
    ShowShoppingCar,
    AddProduct,
    DeleteProduct,
    CalculateTotal,
    CheckOut,
};
