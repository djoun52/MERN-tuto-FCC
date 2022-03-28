import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IOIcons from "react-icons/io";


export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Connextion",
        path: "/login",
        icon: <AiIcons.AiOutlineLogin />,
        cName: "nav-text"
    },
    {
        title: "Inscription",
        path: "/register",
        icon: <AiIcons.AiFillEdit />,
        cName: "nav-text"
    },

]