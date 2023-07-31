import { connect } from "@/utils/db"
import { NextResponse } from "next/server"
import Posts from "@/models/Posts"
export async function GET(request, { params }) {
    const { id } = params
    console.log(params);
    try {
        await connect()
        const post = await Posts.findById(id)
        return new NextResponse(JSON.stringify(post), { status: 200 })
    } catch (error) {
        console.log(error);
        return new NextResponse("Error", { status: 500 })
    }

}