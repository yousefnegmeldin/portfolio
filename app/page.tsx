import Image from "next/image";
import SocialLink from "./ui/SocialLink";
import LinkedIn from "../public/logos/linkedin.svg";
import Anchor from '../app/ui/Anchor'
import Technology from "./ui/Technology";
import java from '../public/logos/java.svg'
import next from '../public/logos/nextjs.svg'
import BentoBoxFlex from "./ui/BentoBoxFlex";
import me from '../public/pictures/me.jpeg'
import setup from '../public/pictures/setup.jpeg'
import gmail from '../public/logos/gmail.svg'
import X from '../public/logos/X.svg'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 mt-16">
      <h2 className="text-2xl font-bold italic self-start">Hey, I&apos;m Yousef! 👋</h2>
      <div className="">I&apos;m a 2nd year student at the <Anchor link="https://www.giu-uni.de/" text="German International University"/> in Cairo, Egypt. 
      My true passion for technology, web development, and tech, in general, has led me to choose to pursue my career in software engineering.
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <Image src={me} alt="Yousef Negmeldin" height={300} quality={100} className="rounded-xl "/>
        <Image src={setup} alt="My setup" width={530}  quality={100} className="rounded-xl "/>
      </div>
      <div>
        I am exploring the world of fullstack development and I love having the ability of crafting beautiful and functional web applications.
        I am now building web applications harnessing the <Technology logo={next} text="Next.js"/> framework and it has been a great developer experience so far.
        I also love randomly solving leetcode problems at 3AM using <Technology logo={java} text="Java"/>, the best OOP language out there in my humble opinion.
      </div>

      <div className="flex justify-center gap-5 flex-wrap">
        <SocialLink imgSrc={LinkedIn} text={"LinkedIn"} link="https://www.linkedin.com/in/yousef-negmeldin-bb3683229/"/>
        <SocialLink imgSrc={X} text={"Twitter/X"} link='https://twitter.com/youseffnegm' />
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
