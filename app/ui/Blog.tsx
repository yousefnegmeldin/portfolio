import React, { FC } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
type BlogProps = {
  title: string;
  date: string;
  alt: string;
  linkTo: string;
  imageSrc: StaticImageData;
};

const Blog: FC<BlogProps> = ({ title, date, alt, imageSrc, linkTo }) => {
  return (
    <Link href={linkTo} className="lg:w-[calc(50%-0.5rem)] w-full h-full ">
      <div className="rounded-2xl ">
        <Image src={imageSrc} alt={alt} className="rounded-tl-2xl rounded-tr-2xl" />
        <div className="w-full bg-gray-400 flex flex-col gap-4 bg-zinc-900 p-4 rounded-bl-2xl rounded-br-2xl">
          <h1 className="text-md font-bold lg:text-2xl h-16"> {title} </h1>
          <p className="text-neutral-300">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
