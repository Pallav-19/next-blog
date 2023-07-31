"use client";
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.css"
import { signOut, useSession } from 'next-auth/react';
const links = [
    { id: 6, title: "Home", url: "/" },
    { id: 3, title: "Dashboard", url: "/dashboard" },
    { id: 4, title: "Portfolio", url: "/portfolio" },
    { id: 2, title: "Blog", url: "/blog" },
    { id: 1, title: "About", url: "/about" },
    { id: 5, title: "Contact", url: "/contact" },
]
const Navbar = () => {
    const session = useSession()
    const pathname = usePathname()
    // console.log(pathname.split("/")[pathname.split("/").length-1]);
    const router = useRouter()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(pathname.split("/")[1])
    }, [pathname])
    return (
        <div className={`${styles.navbar_bg_color} flex w-full justify-between  p-4 sticky top-0 z-50 items-center`}>
            <Link className='flex font-bold text-xl text-emerald-500' href={"/"}>Blogg</Link>
            <div className='flex  gap-6 items-center'>
                {
                    links.map(l => (<Link className={`${path === l.url.slice(1) && "text-emerald-500"}`} href={l.url} key={l.id}>{l.title}</Link>))
                }
                {pathname.split("/")[pathname.split("/").length - 1] !== "login" && < button onClick={() => { if (session.status === 'authenticated') { signOut() } else if (session.status === 'unauthenticated') { router.push("/dashboard/login") } }} className='bg-emerald-500 p-1 px-2 rounded-md'> {session.status === "authenticated" ? "Logout" : "Login"} </button>}
            </div>
        </div >
    )
}

export default Navbar