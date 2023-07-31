'use client'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Register = () => {
  const router = useRouter()
  const session = useSession()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/register', { method: 'POST', headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name, email, password }) })
      res.status === 201 && router.push("/dashboard/login")
    } catch (error) {
      throw new Error("Error")
    }

  }
  const handleChange = (setState) => (event) => {
    setState(event.target.value)
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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

          <input value={name} onChange={handleChange(setName)} type='text' name='name' required placeholder='Name' className=' bg-transparent border-2 text-white border-x-gray-300 p-2 rounded-md w-2/5 ' />
          <input value={email} onChange={handleChange(setEmail)} type='email' name='email' required placeholder='Email' className=' bg-transparent border-2 text-white border-x-gray-300 p-2 rounded-md w-2/5' />
          <input value={password} onChange={handleChange(setPassword)} type='password' name='password' required placeholder='Password' className=' bg-transparent border-2 text-white border-x-gray-300 p-2 rounded-md w-2/5' />

          <button type='submit' className='bg-emerald-400 text-white w-2/5 p-2 text-xl rounded-md'>Register</button>
        </form>
        <hr className='w-2/5' />
        <button type='button' onClick={() => signIn('google')} className='bg-sky-600 text-white w-2/5 p-2 text-xl rounded-md'> Continue With Google </button>
        {/* <button type='button' className='bg-slate-800 text-white w-2/5 p-2 text-xl rounded-md'>Continue With Github</button> */}
        <Link href={"/dashboard/login"} className='text-emerald-500 decoration-emerald-400 underline'>Login as existing user?</Link>
      </div>
    )
}

export default Register