import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
export const metadata = {
    title: "Blogg | About",
    description: "About Blogg"
}
const About = () => {
    return (
        <div className='w-100 h-screen flex flex-col gap-6' >
            <div className='w-100 h-72 relative'>

                <Image className='object-cover grayscale' src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt='img'
                    fill={true}
                />
                <div className='bg-emerald-400 bg-opacity-80 absolute bottom-5 left-3 p-2 text-white rounded-md '>
                    <p className='text-2xl font-bold'>Digital Storytellers</p>
                    <p className='text-xl'>Handcrafting award winning digital experience</p>
                </div>
            </div>
            <div className='flex justify-end gap-8 w-full'>
                <div className='flex flex-col gap-8 w-1/2' >
                    <h1 className='text-5xl font-bold'>What do we do?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac diam ante. Nulla bibendum, sapien ut pharetra posuere, nulla sapien sodales nulla, nec fringilla metus diam vitae purus. Aenean efficitur mi a orci scelerisque, eu euismod urna lobortis. Vestibulum nec volutpat nisi, nec tincidunt turpis. Fusce non neque dui. Phasellus aliquam massa ex, vel consequat risus fermentum vitae.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac diam ante. Nulla bibendum, sapien ut pharetra posuere, nulla sapien sodales nulla, nec fringilla metus diam vitae purus.
                    </p>
                </div>
                <div className='flex flex-col gap-8 w-1/2'>
                    <h1 className='text-5xl font-bold'>Who Are We?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac diam ante. Nulla bibendum, sapien ut pharetra posuere, nulla sapien sodales nulla, nec fringilla metus diam vitae purus. Aenean efficitur mi a orci scelerisque, eu euismod urna lobortis.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac diam ante. Nulla bibendum, sapien ut pharetra posuere, nulla sapien sodales nulla, nec fringilla metus diam vitae purus.
                    </p>
                    <Button url={"/contact"} name={"Contact us"} />
                </div>
            </div>
        </div>
    )
}

export default About
