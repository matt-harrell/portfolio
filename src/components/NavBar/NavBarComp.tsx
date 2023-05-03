import { Link } from "gatsby-link";
import React from "react";
import { useNav } from "../NavContext";
import { Link as ScrollLink, scroller } from "react-scroll";

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

    const matchRoute = (url:string):string => {
        if (url.replace('/', '').replace("#", '') === route?.route) {
            return ' opacity-100'
        } else {
            return ' opacity-0'
        }
    }

    return (
        <nav className="bg-tan mb-3">
            <button onClick={()=>handleClick(isNavOpen)} className="lg:hidden block ml-auto py-2 pr-2">
                {isNavOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> 
                }

            </button>

            <div className={"lg:flex lg:flex-row flex-col justify-center " +
                (isNavOpen ? "flex" : "hidden")
            }
            >
            {navItems.map(([title, url]) => (
                <div key={title} className="lg:basis-60 max-w-lg text-center py-3">
                    {url.includes("#") && window.location.pathname === '/' ? 
                        <ScrollLink to={url.replace('/','').replace('#','')} smooth={true} duration={300} className="text-xl cursor-pointer">{title}</ScrollLink> :
                        <Link to={url} className="text-xl">{title}</Link>
                    }
                    <div className={'w-11 h-1 bg-light-blue mx-auto rounded transition-opacity ease-out duration-300' + matchRoute(url)}></div>
                </div>
            ))}
            </div>
        </nav>
    );
}

export default NavBarComp;