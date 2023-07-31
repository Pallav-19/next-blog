import User from "@/models/User";
import { connect } from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { name, email, password } = await request.json();

    await connect();

    const hashedPassword = await bcrypt.hash(password, 5);

    try {
        const user = await User.create({ name, email, password: hashedPassword })
        return new NextResponse(User, {
            status: 201,
        });
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};