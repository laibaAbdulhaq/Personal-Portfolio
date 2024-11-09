import React from "react";
import Link from "next/link";

const Footer =()=>{
    return(
        <footer className="footer  bg-[#121316]   text-white">
            <div className="container p-12 flex justify-between ">
                <span>LOGO</span>
                <p className="text-slate-400">Connect me with:<br/><a href="mailto:laibaabdulhaq39@gmail.com">
                laibaabdulhaq39@gmail.com </a></p>
                
            </div>
        </footer>
    )
}
export default Footer