import React from "react";


interface ProjectTagprops{
    
    onClick : (tag:string)=>void;
    tag:string;
    isSelected: boolean;
    
    
    
}

const ProjectTag:React.FC<ProjectTagprops> =({ onClick, tag, isSelected})=>{
    const buttonStyles = isSelected ? "text-white border-purple-500" : "text-[#ADB7BE] border-blue-600 block bg-[#121212] hover:bg-slate-800 rounded-full px-3 py-2"
    return(
        <button className={`${buttonStyles}rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-colors duration-200`}
            onClick={()=>onClick(tag)}>
            {tag}
        </button>
    )
}
export default ProjectTag