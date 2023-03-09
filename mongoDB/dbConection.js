const {MongoClient }= require('mongodb')

const connectionURL = "mongodb+srv://hrithik:Hri805120@simplesa.uks0psm.mongodb.net/?retryWrites=true&w=majority"
const dbName = "sms"

let connectDB = async (collectyionName)=>{
    const client = new MongoClient(connectionURL)
    try{
        await client.connect()
        const db = client.db(dbName)
        const collection = db.collection(collectyionName)
        console.log("db connected")
        return collection
    } catch(error){
console.log("db not connected"+"   "+error)
    }
    process.kill
}

module.exports = {
    connectDB
}

