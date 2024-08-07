import Link from "next/link";
import React from "react";
import Image from "next/image";
import golang from "../../public/blogs/golang_summer.jpg";
import linuxPenguin from "../../public/blogs/linux_penguin.jpg";
import Blog from "../ui/Blog";
const page = () => {
  return (
    <div className="w-full flex justify-center mt-16 ">
      <main className="flex justify-center flex-wrap gap-4">
        <Blog
          title="My experience switching to linux"
          date="July 6, 2024"
          linkTo="/blog/switching_to_linux"
          alt="linux penguin"
          imageSrc={linuxPenguin}
        />
        <Blog title="How I'll be spending my 2024 summer" date="June 22, 2024" linkTo="/blog/2024_summer" alt="Gopher" imageSrc={golang} />
      </main>
    </div>
  );
};

export default page;
