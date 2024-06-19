"use client"
import React,{useState,useEffect} from 'react'
import Content from './Content.mdx'


const Page = () => {
  return (
    <div className='prose lg:prose-xl prose-neutral prose-invert prose-code:prose-neutral prose-pre:prose-neutral'>
        <Content />       
    </div>
  )
}

export default Page