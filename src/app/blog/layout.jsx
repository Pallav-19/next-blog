import React from 'react'
export const metadata = {
    title: "Blogg | Blog",
    description: "About Blogg"
}
const BlogLayout = ({ children }) => {
    
    return (
        <div className='h-auto p-4' >
            {children}
        </div>
    )
}

export default BlogLayout