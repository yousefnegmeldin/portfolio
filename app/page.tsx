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
export default function Home() {
  return (
    <main className="flex flex-col gap-8 mt-16">
      <h2 className="text-2xl font-bold italic">Hey, I&apos;m Yousef! 👋</h2>
      <p>I&apos;m a 2nd year student at the <Anchor link="www.giu-uni.de" text="German International University"/> in Cairo, Egypt. 
      My true passion for technology, web development, and tech, in general, has led me to choose to pursue my career in software engineering.
      </p>
      <p>My first ever encounter with coding was in 2017 where I bought a udemy course and never finished it, in fact I gived up half way because I could not understand anything.
        But here I am, a few years later, proficient in many programming languages and frameworks such as React, Node.js, Java, and Python. I have also worked on many projects, some of which are available on my GitHub profile.
        <Technology logo={github} text="GitHub" />
        <Technology logo={java} text="Java" />
        <Technology logo={next} text="Next.js" />
      </p>
      <div className="flex justify-center">
        <BulletinBoard />
      </div>
      <div className="relative">
        asds
        {/* <Image src={line_3} alt="whitebox" className="" /> */}
      </div>
      
      <div className="flex justify-center gap-10 flex-wrap">
        <SocialLink imgSrc={LinkedIn} text={"LinkedIn"} link="https://www.linkedin.com/in/yousef-negmeldin-bb3683229/"/>
        <SocialLink imgSrc={githubwhite} text={"GitHub"} link="http://github.com/yousefnegmeldin" />
      </div>
    </main>
  );
}
