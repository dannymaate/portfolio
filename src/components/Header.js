import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    
    const navLinks = [
        {
            name: "home",
            url: "/",
        },
        {
            name: "works",
            url: "/works",
        },
        {
            name: "articles",
            url: "/articles",
        },
    ];
    
    return (
        <header className="page-header">
            <nav className="main-menu">
                <ul>
                    {navLinks.map((link) => (
                        <NavLink key={link.url} to={link.url} className={({ isActive }) => 
                            isActive ? "nav-bar-active" : "nav-bar-pending"
                        }
                        >
                            <li>
                                {link.name}
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </nav>
        </header>
    );

}