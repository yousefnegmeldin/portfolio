import React from 'react'

const BentoBox = () => {
  return (
    <div className='grid grid-cols-5 grid-rows-3 gap-2.5 grid-flow-col place-items-center w-[1200px] h-[540px]'>
        <div className='border-red-600 border w-[214px] h-[227px] '>aws</div>
        <div className='border-red-600 border w-[223px] h-[114px] '>mongo</div>
        <div className='border-red-600 border w-[223px] h-[172px] '>js</div>
        <div className='border-red-600 border w-[237px] h-[133px]'>express</div>
        <div className='border-red-600 border col-span-3 w-[673px] h-[235px] '>react</div>
        <div className='border-red-600 border col-span-3 w-[673px] h-[149px] '>nextjs</div>
        <div className='border-red-600 border w-[200px] h-[113px] '>rest api</div>
        <div className='border-red-600 border w-[200px] h-[113px]'>c++</div>
        <div className='border-red-600 border w-[200px] h-[200px]'>Node.js</div>
        <div className='border-red-600 border w-[200px] h-[100px]'>Python</div>
        <div className='border-red-600 border w-[200px] h-[207px]'>Java</div>
    </div>
  )
}

export default BentoBox