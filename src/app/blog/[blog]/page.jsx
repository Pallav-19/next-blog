'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
const getData = async (id) => {
    const res = await fetch("/api/posts/" + id, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error("failed to fetch")
    }
    return await res.json()
}

const SingleBLog = ({ params }) => {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetch = async () => {

            setData(await getData(params.blog))
        }
        fetch()
    }, [params])

    return (
        <div className='flex flex-col gap-12  h-auto justify-start w-full'>
            <div className='flex flex-row-reverse justify-end gap-8 w-full'>
                <div className='flex flex-col justify-end h-auto relative  w-1/2'>
                    <Image src={data.image} alt='img' fill />
                </div>
                <div className='flex flex-col gap-6 w-1/2'>
                    <p className='text-5xl font-bold'>{data.title}</p>
                    <p className='text-xl'>{data.description}</p>
                    <div className='flex gap-4 align-middle'>
                        <div class="relative inline-block">
                            <Image height={15} width={15} class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                        </div>
                        <p className='font-medium text-xl '>{data.username}</p>

                    </div>
                    <p className='font-medium text-emerald-500 '>{new Date().toDateString()}</p>
                </div>
            </div>
            <p className='whitespace-pre-line'>
                {data.content}
            </p>
        </div>
    )
}

export default SingleBLog