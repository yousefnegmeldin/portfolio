"use client"
import Link from 'next/link'
import React,{FC} from 'react'
import Image from 'next/image'
import github from '../../public/logos/github-nav.svg'
const Navbar:FC = () => {
  return (
    <nav className='flex justify-between items-center'>
        <div className=' w-full flex  justify-between'>
            <div className='flex gap-4'>
            <Link href="/">
                home
            </Link>
            <Link href="/work">
                work
            </Link>
            <Link href="/blog">
                blog
            </Link>
            </div>
            <a href="https://www.github.com/yousefnegmeldin" aria-label="github" target="_blank" rel="noopener noreferrer"><Image src={github} width={24} height={24} alt="github" /></a>
        </div>
    </nav>
  )
}

export default Navbar;