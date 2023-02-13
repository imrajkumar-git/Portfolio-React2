
import "./Navbar.css"

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { MdCastForEducation, MdWorkspacesFilled } from "react-icons/md"

import { useState } from "react";

export const Navbar = () =>{

    const [activeNav, setActiveNav] = useState("#")

    return (
        <nav>
            <a href="#" title="Home" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
            <a href="#about" title="About" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
            <a href="#skills" title="Skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}><MdWorkspacesFilled /></a>
            <a href="#experience" title="Experience or my skills" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBookBookmark /></a>
            <a href="#portfolio" title="Portfolio or my projects" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><RiServiceLine /></a>
            <a href="#contact" title="Contact Me" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiFillMessage /></a>
        </nav>
    )
}