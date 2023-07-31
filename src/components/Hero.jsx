import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div className='w-full flex justify-between h-screen' >
            <div className='flex flex-col h-auto w-1/2 justify-center items-start gap-10'>
                <h1 className='text-6xl font-bold bg-gradient-to-b from-emerald-400 to-gray-200 text-transparent bg-clip-text'>
                    Better design for your digital  products.
                </h1>
                <p className='text-lg'>Turning your ideas into reality.We bring together the teams from the global tech Industry.</p>
                <Button url={"/portfolio"} name={"See our works"} />
            </div>
            <div className='h-auto flex justify-center items-center'>
                <Image src={'/hero.png'} width={450} height={450} alt='hero image' />
            </div>
        </div>
    )
}

export default Hero