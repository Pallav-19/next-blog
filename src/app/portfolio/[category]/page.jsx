import React from 'react'
import { items } from './data'
import Image from 'next/image'
import Button from '@/components/Button'
export async function generateMetadata({ params }) {
    return {
        title: `Blogg | ${params.category}`,
        description: 'Category',
    }

}
const Category = ({ params }) => {
    const category = params?.category
    return (
        <div className='flex flex-col gap-8'>
            <p className='text-emerald-500 font-bold text-2xl'>{category.toUpperCase()}</p>
            <div className='flex flex-col justify-start gap-12'>
                {items[category].map(c => {

                    return (
                        <>
                            <div key={c.id} className={`flex gap-12 justify-between items-center h-auto mb-8 ${c.id % 2 === 0 && "flex-row-reverse"}`}>
                                <div className='flex flex-1 gap-6 flex-col '>
                                    <h1 className='font-bold text-4xl'>{c?.title}</h1>
                                    <p className='text-2xl'>{c?.desc}</p>
                                    <Button name={"See More"} url={"/portfolio"} />
                                </div>
                                <div className='flex flex-1 relative '>
                                    <Image src={c?.image} alt='img' height={400} width={500} />
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default Category