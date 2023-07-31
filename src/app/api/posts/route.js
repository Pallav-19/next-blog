import { connect } from "@/utils/db"
import { NextResponse } from "next/server"
import Posts from "@/models/Posts"
export async function GET(request) {
    const url = new URL(request.url)
    const username = url.searchParams.get("username")
    try {
        await connect()
        const posts = await Posts.find(username && { username })
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        console.log(error);
        return new NextResponse("Error", { status: 500 })
    }

}
export async function POST(request) {
    const body = await request.json()
    try {
        await connect()
        const post = Posts.create({ ...body })
        return new NextResponse(JSON.stringify(post), { status: 201 })
    } catch (error) {
        console.log(error);
        return new NextResponse("Error", { status: 500 })
    }

}
export async function DELETE(request) {
    const url = new URL(request.url)
    const id = url.searchParams.get("id")
    try {
        await connect()
        const post = await Posts.findByIdAndDelete(id)
        return new NextResponse(JSON.stringify(post), { status: 200 })
    } catch (error) {
        console.log(error);
        return new NextResponse("Error", { status: 500 })
    }

}