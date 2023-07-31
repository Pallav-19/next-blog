import React from 'react'
export const metadata = {
    title: "Blogg | Contact",
    description: "Contact Blogg"
}
const ContactLayout = ({ children }) => {
    return (
        <div className='h-auto p-4'>{children}</div>
    )
}

export default ContactLayout