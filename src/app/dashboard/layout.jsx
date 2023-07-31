
import React from 'react'
export const metadata = {
    title: "Blogg | Dasboard",
    description: "Dashboard Blogg"
}
const DashboardLayout = ({ children }) => {
    return (
        <div className='h-5/6 p-4'>{children}</div>
    )
}

export default DashboardLayout