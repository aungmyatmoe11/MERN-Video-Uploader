const mongoose = require('mongoose');

exports.dbConnection = async () => {
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Db Connected')
        }).catch((err) => {
            console.log(err)
        })
}