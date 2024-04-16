import React from 'react'

const BentoBoxFlex = () => {
    const globalStyle = 'bg-[#0A0A0A] border-[#C6C6C6] border'
  return (
    <div className='flex justify-center items-center gap-2.5 w-[1200px] h-[540px]'>
        <div className='flex flex-col gap-2.5'>
            <div className={`${globalStyle} w-[223px] h-[227px]`}>aws</div>
            <div className={`${globalStyle} w-[223px] h-[114px]`}>mongo</div>
            <div className={`${globalStyle} w-[223px] h-[165px]`}>js</div>
        </div>
        <div className='flex flex-col gap-2.5'>
            <div className='flex flex-row gap-2.5'> 
                <div className={`${globalStyle} w-[237px] h-[113px]`}>express</div>
                <div className={`${globalStyle} w-[204px] h-[113px]` }>rest api</div>
                <div className={`${globalStyle} grow`}>c++</div>
            </div>
            <div className={`${globalStyle} col-span-3 w-[673px] h-[235px]` }>react</div>
            <div className={`${globalStyle} col-span-3 w-[673px] h-[159px] `}>nextjs</div>
        </div>
        <div className='flex flex-col gap-2.5'>
            <div className={`${globalStyle} w-[200px] h-[200px]`}>Node.js</div>
            <div className={`${globalStyle} w-[200px] h-[100px]`}>Python</div>
            <div className={`${globalStyle} w-[200px] h-[207px]`}>Java</div>
        </div>
        
    </div>
  )
}

export default BentoBoxFlex