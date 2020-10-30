const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')
const SECRET = config.keyToken

exports.createToken = (dataUser) => {
    const payload = {
        sub: dataUser._id,
        iat: moment().unix(),//Fecha en que se creo el token, con unix() se convierte en numero
        exp: moment().add('1', 'hour').unix(),  // fecha en la que se exira el token.
        firstName: dataUser.firstName,
        lastName: dataUser.lastName,
        phone: dataUser.phone,
        email: dataUser.email,
        password: dataUser.password,
        address: dataUser.address,
        barrio: dataUser.barrio,
    }
    return jwt.encode(payload, SECRET)
}

exports.decodeToken = (token) => {
    const decode = new Promise( (resolve, reject) => {

        try{
            const payload = jwt.decode(token, SECRET)
            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }
            resolve(playload.sub)

        }catch{
            reject({
                status: 500,
                message: 'El token es invalido'
            })

        }
      
        
    })
    return decode
}