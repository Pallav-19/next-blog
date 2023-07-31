'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const Blog = () => {
    const getData = async () => {
        const res = await fetch("/api/posts", {
            cache: 'no-store'
        })
        if (!res.ok) {
            throw new Error("failed to fetch")
        }
        return await res.json()
    }
    const [data, setData] = useState([])
    useEffect(() => {
        const fetch = async () => {

            setData(await getData())
        }
        fetch()
    }, [])
    return (
        <div className='flex flex-col gap-8 w-full'>
            <div className='flex flex-col justify-start gap-6 w-full'>
                {data.map(c => {

                    return (
                        <>
                            <Link href={`/blog/${c._id}`} className='hover:scale-110 transition-all'>
                                <div key={c._id} className={`flex gap-12 justify-end items-center  mb-8 flex-row-reverse w-full`}>
                                    <div className='flex  gap-6 flex-col w-3/4 '>
                                        <h1 className='font-bold text-3xl'>{c?.title}</h1>
                                        <p className='text-xl'>{c?.description}</p>
                                    </div>
                                    <div className='flex  relative h-60 w-1/4'>
                                        <Image src={c?.image} alt='img' fill className='object-cover' />
                                    </div>
                                </div>
                            </Link>
                            <hr />
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default Blog