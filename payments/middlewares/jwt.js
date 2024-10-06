const jwt = require('jsonwebtoken');
const {response, request} = require('express');
const {Encrypt, Decrypt} = require('./validate');


const CreateJWT = (data) =>{
    const {amount, method, date} = data;
    const token = jwt.sign({
        amount,
        method,
        date
    }, process.env.AUTH_JW_SECRET_KEY
    )
    return token
};

const validateJWT = (req=request, res=response, next) => {

    let token = Decrypt(req.header('authorization'));

    if(!token) {
        return res.status(401).json({
            msn: 'Token invalido'
        });
    }

    try{
        token = token.replace('Bearer ','');
        const {amount, method, date}=jwt.verify(token, process.env.AUTH_JW_SECRET_KEY);
        console.log(amount, method, date);
        
    }catch(error){
        return res.status(401).json({
            msn: 'Token invalido'
        });
    }

    next();

};

module.exports = {
    CreateJWT,
    validateJWT
}
