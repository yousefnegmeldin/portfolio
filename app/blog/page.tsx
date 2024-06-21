import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import setup from '../../public/pictures/green.jpg'
const page = () => {
  return (
    <div className='w-full mt-16'>
      <main className='w-full flex gap-8 flex flex-col items-center'>
        <Link href="/blog/1" className='w-3/5'>
          <div className='rounded-2xl'>
          <Image src={setup} alt="setup" className='rounded-tl-2xl rounded-tr-2xl' />
          <div className='w-full bg-gray-400 flex flex-col gap-4 bg-zinc-900 p-4 rounded-bl-2xl rounded-br-2xl'>
              <div className='flex items-center justify-between'>
                <h1 className='text-md font-bold lg:text-2xl'> Finally Understand Javascript Promises </h1>
                <p className='text-neutral-300'>June 21, 2024</p>
              </div>
              
              <p className='text-neutral-300'>asdsds</p>
          </div>
        </div>
        </Link>
      </main>
    </div>
  )
}

export default page