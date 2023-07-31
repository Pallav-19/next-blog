import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { connect } from "@/utils/db"
import User from "@/models/User"
import bcrypt from 'bcryptjs'


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                try {
                    await connect()
                    const user = await User.findOne({ email: credentials.email })
                    if (user) {
                        console.log('found');
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                        if (isPasswordCorrect) {
                            console.log('matched');
                            return user

                        } else {
                            throw new Error("Incorrect password")
                        }
                    } else {
                        throw new Error("User not found")
                    }
                } catch (error) {
                    console.log(error);
                    throw new Error(error)

                }
            }
        }),
    ],
    pages: {
        error: "/dashboard/login"
    }

}
const handler = NextAuth(authOptions)
export { handler as POST, handler as GET }
