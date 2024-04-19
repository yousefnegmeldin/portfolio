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
import me from '../public/pictures/me.jpeg'
import setup from '../public/pictures/setup.jpeg'
import gmail from '../public/logos/gmail.svg'
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 mt-16">
      <h2 className="text-2xl font-bold italic self-start">Hey, I&apos;m Yousef! 👋</h2>
      <div>I&apos;m a 2nd year student at the <Anchor link="www.giu-uni.de" text="German International University"/> in Cairo, Egypt. 
      My true passion for technology, web development, and tech, in general, has led me to choose to pursue my career in software engineering.
      </div>
      <div className="flex justify-center items-center gap-5">
        <Image src={me} alt="Yousef Negmeldin" height={300} quality={100} className="rounded-xl"/>
        <Image src={setup} alt="My setup" width={500}  quality={100} className="rounded-xl"/>
      </div>
      <div>
        I am exploring the world of fullstack development and I love having the ability of crafting beautiful and functional web applications.
        I am now building web applications harnessing the <Technology logo={next} text="Next.js"/> framework and it has been a great developer experience so far.
        I also love randomly solving leetcode problems at 3AM using <Technology logo={java} text="Java"/>, the best OOP language out there in my humble opinion.
      </div>

      <div>
        Since this is my portfolio, I have the right to humbly brag about myself, right? 😅 I&apos;m just going to brag about one thing, and that is my ability to solve <span className="font-bold text-2xl underline">any</span> problem presented to me as long as I have a reasonable time to do so.
        So if you have any developer problems that you think I can help with, do not hesitate to reach out to me. I would love to help you out.
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        <SocialLink imgSrc={LinkedIn} text={"LinkedIn"} link="https://www.linkedin.com/in/yousef-negmeldin-bb3683229/"/>
        <SocialLink imgSrc={githubwhite} text={"GitHub"} link="http://github.com/yousefnegmeldin" />
        <SocialLink imgSrc={gmail} text="Email" link="mailto:yousefnegmdev@gmail.com" />
      </div>
      <div>
        Over the years I have used many technologies, frameworks, and languages. Below are some of the technologies that I regularly use:
      </div>
      <div className="flex justify-center">
        <BentoBoxFlex />
      </div>
    </main>
  );
}
