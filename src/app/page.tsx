"use client"

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Globe } from "~/components/ui/globe";
import { GlobeDemo } from "~/components/ui/globeDemo";
import Typed from 'typed.js';
import { cn } from "~/utils/cn";
import { GeistSans } from "geist/font/sans";

export default function HomePage() {
  const [opened, setOpened] = useState(false);

  function openInformationHandler(){
    window.open('mailto:aidan@farnsworthintelligence.com', 'blank');
    // setOpened(!opened)
    // setTimeout(()=>{
    //   window.scrollTo({
    //     top: 1000,
    //     behavior: "smooth",
    //   });
    // }, 200)

  }

  return (
    <main className={`${GeistSans.variable}` + 'h-screen w-full'}>
      <div className="h-screen">
        <GlobeDemo></GlobeDemo>
        <div className={`${GeistSans.variable}` + ' mx-auto w-[80%] max-w-[1000px] flex-auto flex-col'}>
          <button className="mx-auto" onClick={openInformationHandler}>
            <h1 className="text-center text-2xl font-bold text-white md:text-5xl">Contact Me</h1>
          </button>
          <p className="text-center text-base text-white md:text-lg">Full website coming soon!</p>
          {/*
           <div className={cn("flex flex-col gap-4 m-6 text-2xl transition-all overflow-hidden", opened ? "max-h-[500px]" : "max-h-0" )}>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Leo duis ut diam quam nulla. Congue nisi vitae suscipit tellus mauris a. Duis convallis convallis tellus id interdum velit. Nec feugiat nisl pretium fusce id velit. Vivamus at augue eget arcu dictum. Elementum curabitur vitae nunc sed velit. Non blandit massa enim nec dui nunc mattis enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Et molestie ac feugiat sed lectus. Varius vel pharetra vel turpis nunc. Id volutpat lacus laoreet non curabitur gravida arcu ac. Duis ultricies lacus sed turpis. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Sit amet aliquam id diam maecenas ultricies mi eget.
            </p>

            <p>

              Morbi enim nunc faucibus a. Sem nulla pharetra diam sit amet nisl suscipit. Pellentesque id nibh tortor id aliquet lectus proin nibh. Non blandit massa enim nec dui nunc mattis enim. Auctor eu augue ut lectus arcu. In nibh mauris cursus mattis molestie a iaculis. Sit amet cursus sit amet dictum sit. Pellentesque habitant morbi tristique senectus et. Nibh tellus molestie nunc non blandit massa. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Molestie at elementum eu facilisis. Viverra tellus in hac habitasse platea. Eleifend mi in nulla posuere. Diam volutpat commodo sed egestas egestas fringilla phasellus. Proin libero nunc consequat interdum varius sit amet mattis. Ultricies tristique nulla aliquet enim.
            </p> 

            <p>
              Faucibus in ornare quam viverra orci. Etiam tempor orci eu lobortis. Commodo ullamcorper a lacus vestibulum sed arcu non. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Netus et malesuada fames ac turpis egestas maecenas. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Morbi tristique senectus et netus et malesuada. Tristique senectus et netus et malesuada. Et molestie ac feugiat sed lectus vestibulum mattis. Quisque id diam vel quam. Rhoncus aenean vel elit scelerisque. Nulla at volutpat diam ut. Elit sed vulputate mi sit. Sagittis orci a scelerisque purus semper eget duis at tellus. Congue mauris rhoncus aenean vel elit. Nunc mattis enim ut tellus.
            </p>
          </div> 
          */}
          
        </div>
      </div>
    </main>
  );
}
