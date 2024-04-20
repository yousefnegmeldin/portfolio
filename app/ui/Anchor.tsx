import React,{FC} from 'react'

type AnchorProps = {
    text:string,
    link:string,
}

const Anchor:FC<AnchorProps> = ({text,link}) => {
  return (
    <span><a target="_blank" href={link} className="border-b border-zinc-300 cursor-pointer">{text}</a></span>
  )
}

export default Anchor