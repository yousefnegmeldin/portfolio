import React,{FC} from 'react'
import Image, { StaticImageData } from 'next/image'
type TechnologyProps = {
  logo:StaticImageData,
  text:string,
}
const Technology:FC<TechnologyProps> = ({logo, text}) => {
  return (
    <div className='inline-block'>
        <div className='border-zinc-700 border bg-[#181818] rounded flex gap-2 items-center h-[26px]'>
        <Image src={logo} alt={text} width={16} height={16} className='ml-2' />
        <p className="pr-2 font-bold">{text}</p>
        </div>
    </div>
  )
}

export default Technology