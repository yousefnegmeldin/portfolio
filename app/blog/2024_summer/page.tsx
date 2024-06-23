"use client"
import React,{useState,useEffect} from 'react'
import Head from 'next/head';
import Content from './Content.mdx'
// import hljs from 'highlight.js/lib/core';
// import go from 'highlight.js/lib/languages/go';
// import "cdn.com/atom-one-dark.min.css"



const Page = () => {

  return (
    <>
    <Head>
        <title>How I&apos;ll be spending my 2024 summer</title>
        <meta property="og:title" content="How I'll be spending my 2024 summer" />
        <meta property="og:description" content="2024 summer goals" />
        <meta property="og:image" content="/blogs/golang_summer.jpg" />
        <meta property="og:url" content="https://www.yousefnegm.dev/blog/2024_summer" />
        <meta property="og:type" content="article" />
        {/* Add additional meta tags as needed */}
      </Head>
    <div className='prose lg:prose-xl prose-neutral prose-invert prose-code:prose-neutral prose-pre:prose-neutral'>
        <Content />       
    </div>
    </>
  )
}

export default Page