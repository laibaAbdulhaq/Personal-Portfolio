"use client";
import Image from "next/image";
import React from "react";

import { TypeAnimation } from 'react-type-animation';

const Herosection=()=>{
    return(
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                   <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to bg-pink-500">Hello, I'm</span> 
                   <br></br>
                   <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Laiba',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Front-End Developer',
        1000,
        'Creative Coder',
        1000
      ]}
      wrapper="span"
      speed={50}
      //style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                </h1>
                <p className="text-[#adb7be] text-sm mb-6 lg:text-2xl ">
                A passionate web developer with experience in creating dynamic and responsive websites. 
                 With a strong foundation in TypeScript, React, and modern frameworks like Next.js, 
                 I love bringing ideas to life through code. My work focuses on clean design, usability, and performance,
                 ensuring that each project I undertake delivers an engaging user experience.
                 

                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to via-purple-600 to bg-pink-500 hover:bg-slate-100">Hire Me</button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to bg-pink-500 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-3 py-2 ">Download CV</span></button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative overflow-hidden items-center justify-center">
                  <img src="profile.avif" alt="hero image" className="w-full h-full object-cover" />
                </div>
            </div>

            
          </div>
        </section>
    )
};
export default Herosection; 