import { config } from 'dotenv'
config()
import mongoose from 'mongoose'
export const connect = async () => {
    mongoose.connect(process.env.MONGODB_URI).then((x => console.log("Atlas conmected"))).catch(err => console.log(err))
}