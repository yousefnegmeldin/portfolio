import React,{FC} from 'react'
import Image, { StaticImageData } from 'next/image'

type ShowcaseProps = {
    imageSrc: StaticImageData,
    text: string,
}

const Showcase:FC<ShowcaseProps> = ({imageSrc,text}) => {
  return (
    <div className='bg-[#0A0A0A] border-[#383838] border rounded flex flex-row items-center justify-between h-[300px] overflow-hidden'>
        <div className='w-2/5 m-4'>
            <Image src={imageSrc} alt={text} className='border-[#383838] border rounded' />
        </div>
        <div className='p-4 flex flex-col justify-start w-3/5 self-start'>
            <div className='flex flex-col gap-1 my-1'>
                <p>Date</p>
                <h2 className='text-3xl'>Title</h2>
            </div>
            <p className='mt-2'>asdasdas</p>
        </div>
    </div>
  )
}

export default Showcase