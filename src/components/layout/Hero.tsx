'use client'

import Arrow from "@/static/Arrow";
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div className="flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-gradientLeft to-gradientRight">
        <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse items-center w-full flex-1">
          <div className="flex flex-col z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
            <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full">
              Greetings, I&apos;m Kobi
            </p>
            <p className="desktop:text-[3vw] mobile:text-[5vw]">
              A curious developer with a passion for:{" "}
              <Typing />
            </p>
            <div className='flex mobile:hidden mt-6 justify-start w-[17vw]'>
              <SocialMedia size={200} />
            </div>
          </div>
        </div>
        <div className="desktop:absolute desktop:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
          <Link href={"/#About"} aria-label='About' >
            <Arrow />
          </Link>
        </div>
      </div>
      <Image
        src="/transitions/transition_gradient_to_grey.svg"
        alt="gradient to grey transition"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '176px' }}
      />
    </div>
  );
}

export default Hero;