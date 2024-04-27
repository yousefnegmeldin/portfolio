"use client"
import React from 'react'
import Image from 'next/image'
import images from '../../public/bentobox/index.js'
import { motion } from "framer-motion"
const MobileTech = () => {
    const list = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }
      
      const listItem = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }

    const {sql,cpp,express,java,javascript,node,mongoDB,python,rest,react,nextLogo} = images;
    const tech = [
        {name:'Java',logo:java},
        {name:'Next.js',logo:nextLogo},
        {name:'MongoDB',logo:mongoDB},
        {name:'Express',logo:express},
        {name:'React',logo:react},
        {name:'Node.js',logo:node},
        {name:'Python',logo:python},
        {name:'C++',logo:cpp},
        {name:'SQL',logo:sql},
        {name:'REST',logo:rest}
    ]
  return (
    <motion.ul variants={list} initial="hidden" whileInView="visible">
        {tech.map((item,index)=>{
                return (
                    <motion.li variants={listItem} key={item.name} className='w-[300px] h-[100px] bg-[#0A0A0A] border-[#383838] m-4 border rounded-2xl flex gap-4 justify-around items-center'>
                        <div className='w-1/4'>
                        <Image height={80} src={item.logo} alt={item.name} />
                        </div>
                        <p className='font-bold w-[100px]'>{item.name}</p>
                    </motion.li>
                )
        })} 
    </motion.ul>
  )
}

export default MobileTech