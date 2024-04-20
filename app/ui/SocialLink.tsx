import React,{FC} from 'react'
import Image, { StaticImageData } from 'next/image'
import white_link from '../../public/whitelink.svg'

type SocialLinkProps = {
    text: string,
    imgSrc: StaticImageData,
    link:string,
}
const SocialLink:FC<SocialLinkProps> = ({text,imgSrc,link}) => {
  return (
    <a href={link} target="_blank" className='w-[200px] h-[100px] bg-[#181818] flex items-center justify-around border-zinc-700 border rounded-md cursor-pointer'>
        <Image className='ml-2' src={imgSrc} alt={text} width={50} />
        <p className='font-bold text-wrap'>{text}</p>
        <Image src={white_link} alt="open link" height={15} width={15} className='' />
    </a>
  )
}

export default SocialLink