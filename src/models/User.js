import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", userSchema)