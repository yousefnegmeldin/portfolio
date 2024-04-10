import Link from 'next/link';
import React,{FC} from 'react'

const Navbar:FC = () => {
  return (
    <nav>
        <div className='flex gap-6'>
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
    </nav>
  )
}

export default Navbar;