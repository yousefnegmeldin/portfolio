"use client"
import React, { use } from 'react'
import images from '../../public/bentobox/index.js'
import Image from 'next/image'
import { motion } from "framer-motion"
import MobileTech from './MobileTech'
import { useEffect,useState } from 'react'
import useDeviceSize from '../_hooks/useDeviceSize'
const BentoBoxFlex = () => {
    const [width, height] = useDeviceSize();

    const mobile = !(width<1200);
   
    const {sql,cpp,express,java,javascript,node,mongoDB,python,rest,react,nextLogo,nextText} = images;
    const globalStyle = 'bg-[#0A0A0A] border-[#383838] border rounded-2xl flex justify-center items-center';
    


    const fadeInLeftAnimation = {
        initial:{
            opacity:0,
            x:-100, 
        },
        animate:{
            opacity:1,
            x:0,
        }
    }
    
    const fadeInRightAnimation = {
        initial:{
            opacity:0,
            x:100, 
        },
        animate:{
            opacity:1,
            x:0,
        }
    }

    const fadeInUpAnimation = {
        initial:{
            opacity:0,
            y:100, 
        },
        animate:{
            opacity:1,
            y:0,
        }
    }

    const fadeInDownAnimation = {
        initial:{
            opacity:0,
            y:-100, 
        },
        animate:{
            opacity:1,
            y:0,
        }
    }

  return (
    <div>

    
    {mobile?<div className='flex justify-center items-center gap-2.5 w-[1200px] h-[540px]'>
        <div className='flex flex-col gap-2.5'>
            <motion.div 
            variants={fadeInLeftAnimation} 
            initial="initial" 
            whileInView="animate" 
            viewport={{once:true}} 
            transition={{ ease: "backInOut", duration: 0.5 }}
            className={`${globalStyle} w-[223px] h-[227px] p-4`}
            >
                <Image src={sql} alt="SQL logo" />
            </motion.div>
            <motion.div 
            variants={fadeInLeftAnimation} 
            initial="initial" 
            whileInView="animate"
            transition={{ ease: "backInOut", duration: 0.5,delay:0.1 }}
            viewport={{once:true}} 
            className={`${globalStyle}  w-[223px] h-[114px]`}
            >
                <Image src={mongoDB} alt="mongoDB logo" />
                <p className='p-4 font-bold text-xl'>MongoDB</p>
            </motion.div>
            <motion.div 
            variants={fadeInUpAnimation} 
            initial="initial" 
            whileInView="animate"
            transition={{ ease: "backInOut", duration: 0.5,delay:0.6 }}
            viewport={{once:true}}
            className={`${globalStyle} w-[223px] h-[165px] `}
            >
                <Image src={javascript} alt="javascript logo" />
            </motion.div>
        </div>
        <div className='flex flex-col gap-2.5'>
            <div className='flex flex-row gap-2.5'> 
                <motion.div
                variants={fadeInDownAnimation} 
                initial="initial" 
                whileInView="animate"
                transition={{ ease: "backInOut", duration: 0.5,delay:0.3 }}
                viewport={{once:true}}
                className={`${globalStyle} w-[237px] h-[113px]`}
                >
                    <Image src={express} alt="express logo" height={100} />
                </motion.div>
                <motion.div
                variants={fadeInDownAnimation} 
                initial="initial" 
                whileInView="animate"
                transition={{ ease: "backInOut", duration: 0.5,delay:0.4 }} 
                viewport={{once:true}}
                className={`${globalStyle} w-[204px] h-[113px]` }
                >
                    <Image src={rest} alt="rest logo"  />
                </motion.div>
                <motion.div
                variants={fadeInDownAnimation} 
                initial="initial" 
                whileInView="animate"
                transition={{ ease: "backInOut", duration: 0.5,delay:0.8 }}
                viewport={{once:true}} 
                className={`${globalStyle} grow`}
                >
                    <Image src={cpp} alt="c++ logo" height={100}  />
                </motion.div>
            </div>
            <motion.div
            variants={fadeInUpAnimation} 
            initial="initial" 
            whileInView="animate"
            transition={{ ease: "backInOut", duration: 0.5,delay:0.2 }}
            viewport={{once:true}}
            className={`${globalStyle} col-span-3 w-[673px] h-[235px]` }
            >
                <Image src={react} alt="React logo"  />
                <p className='text-[120px] p-6 text-[#458EFB]'>React</p>
            </motion.div>
            <motion.div
            variants={fadeInUpAnimation} 
            initial="initial" 
            whileInView="animate"
            transition={{ ease: "backInOut", duration: 0.5,delay:0.7 }}
            viewport={{once:true}} 
            className={`${globalStyle} col-span-3 w-[673px] h-[159px] `}
            >
                <Image src={nextLogo} alt="Next.js logo"  />
                <Image src={nextText} alt="Next.js Text" className='m-12' />
            </motion.div>
        </div>
        <div className='flex flex-col gap-2.5'>
            <motion.div
            variants={fadeInRightAnimation} 
            initial="initial" 
            whileInView="animate"
            transition={{ ease: "backInOut", duration: 0.5,delay:0.5 }}
            viewport={{once:true}} 
            className={`${globalStyle} w-[200px] h-[200px]`}
            >
                <Image src={node} alt="node.js logo"  />
            </motion.div>
            <motion.div
            variants={fadeInRightAnimation} 
            initial="initial" 
            whileInView="animate"
            transition={{ ease: "backInOut", duration: 0.5,delay:0.9 }}
            viewport={{once:true}}  
            className={`${globalStyle} w-[200px] h-[100px]`}
            >
                <Image src={python} alt="python logo"  />
                <p className='p-4 font-bold text-xl'>Python</p>
            </motion.div>
            <motion.div
            variants={fadeInRightAnimation} 
            initial="initial" 
            whileInView="animate"
            transition={{ ease: "backInOut", duration: 0.5,delay:1 }}
            viewport={{once:true}} 
            className={`${globalStyle} w-[200px] h-[207px]`}
            >
                <Image src={java} alt="java logo"  />
            </motion.div>
        </div>
        
    </div>:<div><MobileTech /></div>}
    </div>
  )
}

export default BentoBoxFlex