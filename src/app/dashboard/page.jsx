'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import useSWR from 'swr'
import { RiDeleteBin5Fill } from 'react-icons/ri'

const Dashboard = () => {
    const session = useSession()
    const router = useRouter()
    const [input, setInput] = useState()
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const [loading, setLoading] = useState(false)
    const handleDelete = async (id) => {
        setLoading(true)
        try {
            const res = await fetch(`/api/posts?id=${id}`, { method: "DELETE", headers: { "Content-Type": "application/json", Accept: "application/json", } })
            mutate()
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch("/api/posts", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json", }, body: JSON.stringify({ ...input, username: session?.data?.user?.name }) })
            if (!res.ok) {

            }
            mutate()
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading, mutate } = useSWR(`/api/posts?username=${session?.data?.user?.name}`, fetcher)
    if (session.status === 'loading' || isLoading || loading) {
        return <p>loading...</p>
    }
    if (session.status === 'unauthenticated') {
        router?.push("/dashboard/login")
    }
    if (session.status === 'authenticated') {

        return (
            <div className='flex gap-12 w-full h-full' >
                <div className='flex flex-col justify-start gap-6 w-1/2 max-h-screen overflow-y-scroll no-scrollbar'>
                    <p className='text-7xl font-bold mb-4 text-emerald-300'>Your Blogs</p>
                    {data.length ? data.map(c => {

                        return (
                            <>

                                <div key={c._id} className={`flex gap-12 justify-end  mb-8 flex-row-reverse w-full`}>
                                    <div className='flex  gap-4 flex-col w-1/2  '>
                                        <h1 className='font-bold text-2xl'>{c?.title} </h1>
                                        <p className='text-md text-emerald-400'>{new Date(c?.createdAt).toDateString()}{" / "}{new Date(c?.createdAt).toLocaleTimeString()}</p>
                                        <RiDeleteBin5Fill onClick={() => { handleDelete(c._id) }} fontSize={28} className='text-red-500 mt-auto cursor-pointer' />
                                    </div>
                                    <div className='flex  relative  w-1/2'>
                                        <Image src={c?.image} alt='img' fill className='object-cover' />
                                    </div>
                                </div>

                            </>
                        )
                    }) : "No Posts yet"}

                </div>
                <div className='flex flex-col justify-center h-full items-center gap-6 w-1/2'>
                    <form onSubmit={handleSubmit} className='flex flex-col justify-start items-center gap-6 w-full'>
                        <input onChange={handleChange} value={input?.title} className='bg-transparent border-2 border-slate-200 text-white rounded-md w-3/4 p-3 ' placeholder='Title' name='title' />
                        <input onChange={handleChange} value={input?.description} className='bg-transparent border-2 border-slate-200 text-white rounded-md w-3/4 p-3 ' placeholder='Description' name='description' />

                        <input onChange={handleChange} value={input?.image} className='bg-transparent border-2 border-slate-200 text-white rounded-md w-3/4 p-3 ' placeholder='Image Link' name='image' />

                        <textarea onChange={handleChange} value={input?.content} cols={10} className='bg-transparent border-2 border-slate-200 text-white rounded-md w-3/4 h-36 p-3' placeholder='Content' name='content' />
                        <button type='submit' className='bg-emerald-500 text-white p-2 w-3/4 rounded'>Add Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Dashboard