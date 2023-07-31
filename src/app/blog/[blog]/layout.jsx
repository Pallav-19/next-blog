import React from 'react'
const getData = async (id) => {
    const res = await fetch("/api/posts/" + id, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error("failed to fetch")
    }
    return await res.json()
}
export async function generateMetadata({ params }) {
    const data = await getData(params.blog)
    return {
        title: `Blogg | ${data.title}`,
        description: data.description,
    }
}

const SingleBlogLayout = ({ children }) => {
    return (
        <div className='h-auto'>{children}</div>
    )
}

export default SingleBlogLayout