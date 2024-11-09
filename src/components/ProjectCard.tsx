import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    imgUrl: any;
    title: string;
    description: string|undefined;
    tag:string|number;
    gitUrl:any,
    previewUrl:any,
  }

const ProjectCard: React.FC<ProjectCardProps>  = ({ imgUrl, title, description, gitUrl, previewUrl}) => {
    return(
        <div>
            <div className="h-52 md:h-72 rounded-t-xl relative group">
            <Image 
        src={imgUrl} 
        alt={title} 
        layout="fill" 
        objectFit="cover" 
        className="rounded-t-xl" 
    />
            
            

                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={gitUrl} className="h-14 w-12 mr-2 relative rounded-full border-[#ADB7E] hover:border-white group/link">
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7E] absolute top-1/2 transforrm-translate-x-1/2 cursor-pointer group-hover/link:text-white"/>
                    </Link>

                    <Link href={previewUrl} className="h-14 w-12 relative rounded-full border-[#ADB7E] hover:border-white group/link">
                    <EyeIcon className="h-10 w-10 text-[#ADB7E] absolute top-1/2 transforrm-translate-x-1/2 cursor-pointer group-hover/link:text-white"/>
                    </Link>
                
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4 ">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>

            </div>

        </div>
        
    
    );
}
export default ProjectCard