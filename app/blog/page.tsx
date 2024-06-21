import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import setup from '../../public/pictures/green.jpg'
import Blog from '../ui/Blog'
const page = () => {
  return (
    <div className='w-full flex justify-center mt-16 '>
      <main className='flex justify-center flex-wrap gap-4' >
        <Blog 
          title="Finally Understand Javascript Promises"
          date="June 21, 2024"
          alt="green"
          imageSrc={setup}
        />
      </main>
    </div>
  )
}

export default page