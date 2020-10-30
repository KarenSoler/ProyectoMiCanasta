const mongoose = require('mongoose')

const conectDB = () => {
    mongoose.connect(config.mongoDB,{useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        if(error){
            console.log('Error: ', error)
        }
        else{
            console.log('Nos conectamos a Cynanes Proyect DB.')
        }
    })
}
module.exports = {conectDB}