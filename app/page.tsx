import Image from "next/image";
import BulletinBoard from "./ui/BulletinBoard";
import SocialLink from "./ui/SocialLink";
import LinkedIn from "../public/linkedin.svg";
import github from '../public/github-mark.svg'
import githubwhite from '../public/github-mark-white.svg'
import Anchor from '../app/ui/Anchor'
import Technology from "./ui/Technology";
import whitebox from '../public/whitebox.svg'
import line_3 from '../public/line-3.svg'
import java from '../public/java.svg'
import next from '../public/nextjs.svg'
import apple from '../public/apple.jpg'
import BentoBox from "./ui/BentoBox";
import BentoBoxFlex from "./ui/BentoBoxFlex";
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 mt-16">
      <h2 className="text-2xl font-bold italic self-start">Hey, I&apos;m Yousef! 👋</h2>
      <div>I&apos;m a 2nd year student at the <Anchor link="www.giu-uni.de" text="German International University"/> in Cairo, Egypt. 
      My true passion for technology, web development, and tech, in general, has led me to choose to pursue my career in software engineering.
      </div>
      <div>My first ever encounter with coding was in 2017 where I bought a udemy course and never finished it, in fact I gived up half way because I could not understand anything.
        But here I am, a few years later, proficient in many programming languages and frameworks such as React, Node.js,<Technology logo={java} text="Java" />,<Technology logo={next} text="Next.js" />, and Python. I have also worked on many projects, some of which are available on my GitHub profile.
        <Technology logo={githubwhite} text="GitHub" />
      </div>      
      <div className="flex justify-center gap-10 flex-wrap">
        <SocialLink imgSrc={LinkedIn} text={"LinkedIn"} link="https://www.linkedin.com/in/yousef-negmeldin-bb3683229/"/>
        <SocialLink imgSrc={githubwhite} text={"GitHub"} link="http://github.com/yousefnegmeldin" />
      </div>
      <h1 className="self-start">my current skillset: </h1>
      <div className="w-[1400px]">
        {/* <BentoBox /> */}
        <BentoBoxFlex />
      </div>
    </main>
  );
}
