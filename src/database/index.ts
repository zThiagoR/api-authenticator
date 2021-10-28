import mongoose from "mongoose"

mongoose.connect(`${process.env.MONGO}`)
    .then(() => console.log("Consegui conectar a MongoDB."))
    .catch(err => console.log("Opa! não consegui conectar a MongoDB devido a um erro: "+err))  

export { mongoose }