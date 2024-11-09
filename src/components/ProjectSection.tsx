"use client";
import React,{useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectData = [
    {
        id: 1,
        title: "Resume Builder",
        description: "my 1 project",
        image: "/resume.png",
        tag: "[HTML , CSS ,TypeScript]",
        gitUrl:"",
        previewUrl:"",
    },
    {
        id: 2,
        title: "Car Selling Website",
        description: "my 2 project",
        image: "/Screenshot (19).png",
        tag: "[HTML , tailwind CSS , TypeScript]",
        gitUrl:"",
        previewUrl:"",  
    },
    {
        id: 3,
        title: "The Periodic Table",
        description: "my 3 project",
        image: "/The Periodic Table - Google Chrome 8_20_2024 11_27_07 PM.png",
        tag: "[HTML , CSS ]",
        gitUrl:"     ",
        previewUrl:"",  
    },
    {
        id: 4,
        title: "Photo Gallery ",
        description: "my 4 project",
        image: "/Screenshot (21).png",
        tag: "[HTML , CSS ]",
        gitUrl:"",
        previewUrl:"",  
    },
]
const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTabChange =(newTag:string)=>{
        setTag(newTag);
    };
    
       return(
        <section id="project">
        <h1 className="text-4xl font-bold  text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to bg-blue-500">My Projects</h1>
        <div className="text-white flex flex-row justify-center  items-center gap-2 py-6">
       <ProjectTag onClick={handleTabChange} tag="All Web" isSelected={tag === "All Web"} />
       
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">{ProjectData.map((project)=>
         <ProjectCard
          key={project.id}
          title={project.title} 
          description={project.description}
          imgUrl={project.image}
          tag={project.tag}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          />)}
        </div>
    </section>
    );
}
export default ProjectSection
