import React from 'react'
export const metadata = {
    title: "Blogg | Portfolio",
    description: "About Blogg"
}
const PortfolioLayout = ({ children }) => {

    return (
        <div className='h-auto p-4'>
            <div className='flex flex-col h-auto gap-8 w-full justify-between'>
                <div>
                    <p className='font-bold text-7xl' >Our Works</p>
                </div>

                {children}
            </div>
        </div>
    )
}

export default PortfolioLayout