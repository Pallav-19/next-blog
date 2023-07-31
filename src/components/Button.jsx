import Link from 'next/link'
import React from 'react'

const Button = ({ url, name, width }) => {
    return (
        <Link href={url}>
            <button style={{ width: width }} className='bg-emerald-400 text-gray-50 p-3 rounded-md'>{name}</button>
        </Link>
    )
}

export default Button