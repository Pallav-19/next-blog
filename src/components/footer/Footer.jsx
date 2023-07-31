import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex w-full justify-between align-middle p-4'>
            <div>©️ Blog. All rights reserved </div>
            <div className='flex gap-3'>
                <Image src={"/1.png"} width={25} height={25} alt='img' />
                <Image src={"/2.png"} width={25} height={25} alt='img' />
                <Image src={"/3.png"} width={25} height={25} alt='img' />
                <Image src={"/4.png"} width={25} height={25} alt='img' />
            </div>
        </div>
    )
}

export default Footer