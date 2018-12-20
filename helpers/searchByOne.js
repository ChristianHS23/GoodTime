const Model =require('../models')

function searchByOne(idUser) {
    return new Promise((resolve, reject)=> {
        Model.User.findByPk(idUser)
        .then(data => resolve(data))
        .catch(err => reject(err))
    })  
}

module.exports = searchByOne