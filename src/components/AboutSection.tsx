"use client";
import React,{useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title:"Skills",
        id: "Skills",
        content:(
            <ul className="list-disc pl-2">
                
                <li><strong> Node.js</strong></li>
                <li><strong>React</strong></li>
                <li><strong>Typescript</strong></li>
                <li><strong>HTML</strong></li>
                <li><strong>CSS</strong></li>
                <li><strong>Next.js</strong></li>
                
            </ul>
        )
    },
    {
        title:"Education",
        id: "Education",
        content:(
            <ul className="list-disc pl-2">
                <li><strong>Currently Enrolled:</strong>As a Student at GIAIC</li>
                <li><strong>Intermediate:</strong> SMB Fatima Jinnah College</li>
                <li><strong>Matriculation:</strong> NED Foundation School</li>
            </ul>
        )
    },
    {
        title:"Project",
        id: "Project",
        content:(
            <ul className="list-disc pl-2">
                <li>
                   <a href="https://mini-hackathon-one.vercel.app/" target="_blank" className="hover:text-pink-500">
                   <strong>Car Selling Website</strong></a>
                </li>
                <li>
                <a href="https://milestones-5-xi.vercel.app/" target="_blank" className="hover:text-pink-500">
                <strong>Resume Builder</strong></a>
                </li>
                
            </ul>
        )
    },
]



const AboutSection = () => {
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition ] = useTransition();

    const handleTabChange = (id:string) => {
        startTransition(() => {
           setTab(id);
        });
    }
    return(
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8  items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
             <img src="com.jpg"
              width={600} 
              height={600}
              />
             <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <br></br>
                <h2 className="text-4xl font-bold   text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to bg-pink-500">About Me</h2>
                
                <p className="text-[#adb7be] text-sm mb-6 lg:text-2xl ">
                 I'm a front-end developer with a strong foundation in HTML, CSS, and TypeScript, passionate about crafting clean,
                 responsive, and visually engaging web interfaces. I enjoy using my skills to turn ideas into accessible, 
                 user-friendly websites and applications. My approach is both creative and detail-oriented, ensuring each project
                 I work on provides a seamless experience. Outside of coding, I'm always eager to learn new technologies and stay 
                 updated with the latest trends in web development, 
                 aiming to deliver high-quality work that makes a lasting impact.
                </p>
               
                <div className=" flex flex-row mt-8">
                    <TabButton selectTab={()=>handleTabChange("Skills")}
                     active={tab ==="Skills"}>{""}
                     Skills{""}
                     </TabButton>

                     <TabButton selectTab={()=>handleTabChange("Education")}
                     active={tab ==="Education"}>{""}
                      Education{""}
                     </TabButton>

                     <TabButton selectTab={()=>handleTabChange("Project")}
                     active={tab ==="Project"}>{""}
                     Project{""}
                     </TabButton>

                     </div>
                     <div className="mt-8 text-left">{TAB_DATA.find((t) =>t.id === tab)?.content}
                     </div>
             </div>
            </div>
        </section>

    )
}
export default AboutSection