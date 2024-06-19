"use client"
import React,{useState,useEffect} from 'react'
import Content from './Content.mdx'


const Page = () => {
    const [views, setViews] = useState(0);
    useEffect(() => {

        const fetchPageViews = async ()=>{
          const res = await fetch('/api/pageview/2');
          const data = await res.json();
          console.log(data);
          setViews(data.count);
        }
    
        fetchPageViews();
      }, []);
  return (
    <div className='prose lg:prose-xl prose-neutral prose-invert prose-code:prose-neutral prose-pre:prose-neutral'>
        <p className='sm:mt-16'>Views: {views}</p>
        <Content />
        
    </div>
  )
}

export default Page