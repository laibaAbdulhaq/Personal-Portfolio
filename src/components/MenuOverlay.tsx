import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

interface LinkItem {
    title: string;
    path: string;
}
interface MenuOverlayProps {
    links: LinkItem[];
}
const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
    return(
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index)=>(
                <li key={index}>
                <NavLink href={link.path} title={link.title}/>
                </li>))}
        </ul>
    );
}
export default MenuOverlay