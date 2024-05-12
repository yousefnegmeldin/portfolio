import React from 'react'
import opengraph from '../opengraph-image.jpeg'
import Anchor from '../ui/Anchor'
const page = () => {
  return (
    <main className="flex flex-col gap-8 mt-16">
      <h2 className="text-2xl font-bold">my work 💻</h2>
      <p>My work ranges from web development to university projects using a wide variety of programming languages,
        but I mainly focus on web development as it is my passion and hobby.</p>
      
      <div className='w-full border bg-[#0A0A0A] border-[#383838] rounded-md p-4 flex flex-col'>
        <div className='flex justify-between'>
          <h3 className='text-xl'><Anchor text={"Wavemakers United"} link="https://wavemakersunited.com/" /></h3>
          <p className='italic'>Feb 2024 - Current</p>
        </div>
        <p className='my-1 text-sm'>Backend Developer</p>
        <p className='mt-1 text-base'>I was responsible for creating a backend for a social media app. </p>
        <ul className='list-disc ml-8 mt-1 text-base'>
          <li>
          Wrote out API documentation for 20+ API endpoints using Postman.
          </li>
          <li>
          Lead a team of other developers and wrote weekly reports to my manager.
          </li>
          <li>
          Developed a Node.js backend and adopted the MVC design pattern.
          </li>
          <li>
          Integrated AWS services, including Amazon S3 and Amazon SNS.
          </li>
        </ul>
      </div>

      <div className='w-full border bg-[#0A0A0A] border-[#383838] rounded-md p-4 flex flex-col'>
        <div className='flex justify-between'>
          <h3 className='text-xl'>Learn2Earn</h3>
          <div className='flex'>
          
          <p className='text-base font-bold mx-4'>Private</p>
          <p className='italic'>Feb 2024 - May 2024</p>
          </div>
          
        </div>
        <p className='my-1 text-sm'>Frontend Developer Intern</p>
        <p className='mt-1 text-base'> I mainly worked with an existing codebase and
         fetched data from APIs in coordination with the backend developer </p>
        <ul className='list-disc ml-8 mt-1 text-base'>
          <li>
          Used React to develop 4 interactive pages and 10+ UI components.
          </li>
          <li>
          Worked along-side with UI/UX designers to implement pixel perfect designs straight from Figma.
          </li>
        </ul>
      </div>

    </main>
  )
}

export default page