/** 
*@author zarel
*@version 1.0.0
*
*Controlador de productos
*Este archivo define los controladores de productos
*/
const {response,request} = require ('express')

const AddProduct = async(req=request, res=response)=>{


    const { name, description, price, category } = req.body;

    const result = await prisma.users.create({
        data: {
            name,
            description,
            price,
            category
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

const UpdateProduct = async(req=request, res=response)=>{
    const { name, description, price, category } = req.body;

    const result = await prisma.users.create({
        data: {
            name,
            description,
            price,
            category
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

const DeleteProduct = async(req=request, res=response)=>{
    const { id } = req.params;

    const result = await prisma.users.delete({
        where:{
            id: Number(id)
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

const GetProduct = async(req=request, res=response)=>{
    const products = await prisma.products.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        products
    });
};

module.exports = {
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    GetProduct
};