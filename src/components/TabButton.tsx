import React,{ReactNode} from "react";

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

const TabButton: React.FC<TabButtonProps>= ({ active, selectTab, children})  =>{
const buttonClasses = active ? "text-white border-b border-purple-500" : "text-[#ADB7BE]"

    return(
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-purple-500  text-[#ADB7BE] border-b  border-pink-500 ${buttonClasses}`}>
            {children}
            </p>
        </button>

    );
}
export default TabButton