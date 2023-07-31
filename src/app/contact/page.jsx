import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col gap-12 '>
      <div >
        <h1 className='text-8xl font-bold text-left'>{"Let's"} Keep In Touch</h1>
      </div>
      <div className='flex justify-end gap-8 w-full'>
        <div className='flex flex-col gap-8 w-1/2'>
          <Image src={"/contact.png"} alt='img' height={390} width={390} />
        </div>
        <div className='flex flex-col gap-8 w-1/2'>
          <form>
            <div className='flex flex-col gap-8 w-full p-3'>
              <input className='bg-transparent border-gray-200 border-2 p-2 rounded-md text-white' type='text' required placeholder='Name' />
              <input className='bg-transparent border-gray-200 border-2 p-2 rounded-md text-white' type='email' required placeholder='Email' />
              <textarea className='bg-transparent border-gray-200 border-2 p-2 rounded-md text-white' cols={30} rows={6} placeholder='Message'/>
              <Button width={"100%"} url={"/home"} name={"Send"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact