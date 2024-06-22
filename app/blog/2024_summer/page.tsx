"use client"
import React,{useState,useEffect} from 'react'
import Content from './Content.mdx'
// import hljs from 'highlight.js/lib/core';
// import go from 'highlight.js/lib/languages/go';
// import "cdn.com/atom-one-dark.min.css"



const Page = () => {

  return (
    <div className='prose lg:prose-xl prose-neutral prose-invert prose-code:prose-neutral prose-pre:prose-neutral'>
        <Content />       
    </div>
  )
}

export default Page