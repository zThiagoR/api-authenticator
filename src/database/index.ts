import mongoose from "mongoose"

const ConnectMongoDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO}`)
        console.log("Consegui conectar a MongoDB.")
    } catch (err) {
        console.log("Opa! não consegui conectar a MongoDB devido a um erro: "+ err)
    }
}

ConnectMongoDB()

export { mongoose }