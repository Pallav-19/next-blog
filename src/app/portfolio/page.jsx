import React from 'react'
import styles from "./portfolio.module.css"
import Link from 'next/link'
const Portfolio = () => {
    return (
        <>
            <p className='text-2xl'>Choose a gallery</p>

            <div className={styles.items}>
                <Link href={"/portfolio/illustrations"}>
                    <div className={`${styles.item} ${styles.item1}`} >
                        <p className='absolute bottom-2 right-3 font-bold text-white text-xl '>ILLUSTRATIONS</p>

                    </div>
                </Link>
                <Link href={"/portfolio/websites"}>

                    <div className={`${styles.item} ${styles.item2}`} >
                        <p className='absolute bottom-2 right-3 font-bold text-white text-xl '>WEBSITES</p>
                    </div>
                </Link>
                <Link href={"/portfolio/applications"}>

                    <div className={`${styles.item} ${styles.item3}`} >
                        <p className='absolute bottom-2 right-3 font-bold text-white text-xl '>APPLICATIONS</p>
                    </div>
                </Link>


            </div>
        </>
    )
}

export default Portfolio
