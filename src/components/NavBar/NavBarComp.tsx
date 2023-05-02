import { Link } from "gatsby-link";
import React from "react";
import { useNav } from "../NavContext";

interface NavBarCompProps {
    navItems: string[][];
    isNavOpen:boolean;
    handleClick:(isOpen:boolean) => void;
}

// presentional component for the nav bar
// TODO: create nav links
// have it so blue line moves when new page/url is selected
const NavBarComp: React.FC<NavBarCompProps> = ({ navItems,isNavOpen,handleClick }: NavBarCompProps) => {
    
    const route = useNav();

    return (
        <nav className="bg-tan">
            <button onClick={()=>handleClick(isNavOpen)} className="lg:hidden block ml-auto py-2 pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            <div className={"lg:flex lg:flex-row flex-col justify-center " +
                (isNavOpen ? "flex" : "hidden")
            }
            >
            {navItems.map(([title, url]) => (
                <div key={title} className="lg:basis-60 max-w-lg text-center py-3">
                    <Link to={url} className="text-xl">{title}</Link>
                    {url.replace('/', '').replace("#", '') === route?.route &&
                        <div className="w-11 h-1 bg-light-blue mx-auto rounded"></div>
                    }
                </div>
            ))}
            </div>
        </nav>
    );
}

export default NavBarComp;