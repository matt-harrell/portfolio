import { Link } from "gatsby-link";
import React from "react";

interface NavBarCompProps {
    navItems:string[][];
    route:string;
}

// presentional component for the nav bar
// TODO: create nav links
// have it so blue line moves when new page/url is selected
const NavBarComp:React.FC<NavBarCompProps> = ({navItems,route}:NavBarCompProps) => {
    return (
        <nav className="flex justify-center bg-tan">
            {navItems.map(([title, url]) => (
                <div key={title} className="basis-60 max-w-lg text-center py-3">
                    <Link to={url} className="text-xl">{title}</Link>
                    {url.replace('/','').replace("#",'') === route &&
                        <div className="w-11 h-1 bg-light-blue mx-auto rounded"></div>
                    }
                </div>
            ))}
        </nav>
    );
}

export default NavBarComp;