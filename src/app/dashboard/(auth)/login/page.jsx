'use client'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
    const router = useRouter()
    const session = useSession()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn("credentials", { email, password })
            router.push("/")
        } catch (error) {

        }

    }
    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }
    if (session.status === 'authenticated') {
        router.push("/dashboard")
    }
    if (session.status === 'loading') {
        return <p>loading...</p>
    }
    if (session.status === 'unauthenticated')
        return (
            <div className='h-full w-full flex flex-col items-center justify-start gap-4'>
                <form onSubmit={handleSubmit} className='h-full w-full flex flex-col items-center justify-center gap-6'>

                    <input value={email} onChange={handleChange(setEmail)} type='email' name='email' required placeholder='Email' className=' bg-transparent border-2 text-white border-x-gray-300 p-2 rounded-md w-2/5' />
                    <input value={password} onChange={handleChange(setPassword)} type='password' name='password' required placeholder='Password' className=' bg-transparent border-2 text-white border-x-gray-300 p-2 rounded-md w-2/5' />

                    <button type='submit' className='bg-emerald-400 text-white w-2/5 p-2 text-xl rounded-md'>Login</button>
                </form>
                <hr className='w-2/5' />
                <button type='button' onClick={() => signIn('google')} className='bg-sky-600 text-white w-2/5 p-2 text-xl rounded-md'> Continue With Google </button>
                {/* <button type='button' className='bg-slate-800 text-white w-2/5 p-2 text-xl rounded-md'>Continue With Github</button> */}
                <Link href={"/dashboard/register"} className='text-emerald-500 decoration-emerald-400 underline'>Create a new account?</Link>
            </div>
        )
}

export default Login