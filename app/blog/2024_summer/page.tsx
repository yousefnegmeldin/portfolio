
import React,{useState,useEffect} from 'react'
import { Metadata } from 'next';
import Head from 'next/head';
import Content from './Content.mdx'
// import hljs from 'highlight.js/lib/core';
// import go from 'highlight.js/lib/languages/go';
// import "cdn.com/atom-one-dark.min.css"

export const metadata: Metadata = {
  title: "How I'll be spending my 2024 summer",
  description: "2024 summer goals",
  openGraph: {
    title: "How I'll be spending my 2024 summer",
    description: "2024 summer goals",
    url: "https://www.yousefnegm.dev/blog/2024_summer",
    images: '/opengraph-image.jpg',
    type: "article",
  },
};

const Page = () => {
  
  return (
    <>
    {/* <Head key={1}>
        <title>How I&apos;ll be spending my 2024 summer</title>
        <meta property="og:title" content="How I'll be spending my 2024 summer" />
        <meta property="og:description" content="2024 summer goals" />
        <meta property="og:image" content="./opengraph-image.jpg" />
        <meta property="og:url" content="https://www.yousefnegm.dev/blog/2024_summer" />
        <meta property="og:type" content="article" />
      </Head> */}
    <div className='prose lg:prose-xl prose-neutral prose-invert prose-code:prose-neutral prose-pre:prose-neutral'>
        <Content />       
    </div>
    </>
  )
}

export default Page