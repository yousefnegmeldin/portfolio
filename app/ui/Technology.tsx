import React,{FC} from 'react'
import Image from 'next/image'
type TechnologyProps = {
  logo:string,
  text:string,
}


const Technology:FC<TechnologyProps> = ({logo, text}) => {
  return (
    <div className='inline-block'>
        <div className='border-zinc-700 border bg-[#181818] rounded-md flex gap-2 items-center h-[30px]'>
        <Image src={logo} alt={text} className='w-[16px] h-[16px] ml-2'/>
        <p className="pr-2 font-bold">{text}</p>
        </div>
    </div>
  )
}

export default Technology