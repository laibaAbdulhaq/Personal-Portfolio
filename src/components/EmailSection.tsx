import React from "react";
import Link from "next/link";
import Image from "next/image";
const EmailSection = ()=>{
    return(
        <section id="contact" className=" grid md:grid-cols-2 my-12 md:my-12 md:py-12 py-24 gap-4 relative">
            <div className="flex-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2">

            </div>
           <div className="z-10">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to bg-blue-500">Let's Connect</h3>
            <p className="text-[#adb7be] text-sm mb-6   max-w-md lg:text-2xl ">
                I'm currently looking for new opportunities, my inbox is always open. I'd love to hear from you! Whether you're interested 
                 in collaborating, have questions about my work, or just want to say hello, 
                feel free to reach out. Connecting with others who share a passion for technology and creativity is something I truly enjoy.
                 Let's get in touch and explore new possibilities together!
            </p>
                 <div className= "rounded-full w-[300px] h-[300px] overflow-hidden relative  flex items-center justify-center gap-4 ">
                 <Link href="https://github.com/laibaAbdulhaq" target="_blank">
                    <img src="/github icon.png" alt="Github Icon" className="w-[80px] h-[80px] object-cover object-top rounded-full mt-[-90px]" />
                 </Link>
                 <Link href="https://www.linkedin.com/in/laiba-abdulhaq-51ab0930b" target="_blank">  
                    <img src="/linkedin.jpeg" alt="LinkedIn Icon" className="w-[80px] h-[80px] object-cover object-top rounded-full  mt-[-90px] "/>
                 </Link>
                 </div>
            
           </div>
           <div>
            <br></br>
            <br></br>
            
            <form className="flex flex-col gap-3">
                <label htmlFor="email" className="text-white block  text-sm font-medium">Your Email</label>
                <input type="email" id="email" required className="bg-[#1e212e] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="xyz@gmail.com"/>

               <label htmlFor="Subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                <input type="text" id="Subject" required className="bg-[#1e212e] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Tell Something"/>
                  
               <div>
                  <label htmlFor="Message" className="text-white block text-sm mb-2 font-medium">Message</label>
                  <textarea name="Message" id="Message" className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's Talk..."></textarea>
               </div>
               <button type="submit" className="bg-purple-500 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:bg-pink-600">
                Send Message
               </button>
            </form>
           </div>
        </section>
    )
}
export default EmailSection