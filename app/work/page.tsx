import React from 'react'
import Showcase from '../ui/Showcase'
import opengraph from '../opengraph-image.jpeg'
const page = () => {
  return (
    <main className="flex flex-col gap-8 mt-16">
      <h2 className="text-2xl font-bold">my work 💻</h2>
      <p>My work ranges from web development to university projects using a wide variety of programming languages,
        but I mainly focus on web development as it is my passion and hobby.</p>
      <Showcase imageSrc={opengraph} text="yo" />
      
    </main>
  )
}

export default page