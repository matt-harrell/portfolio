import React, { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import { PageProps } from "gatsby";
import NavBar from "./NavBar/NavBar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {

    const [isNavOpen,setIsNavOpen] = useState(false);

    const handleClick = (isOpen:boolean) => {
        setIsNavOpen(!isOpen);
    }

    const closeNav = () =>{
        setIsNavOpen(false);
    }

    return (
        <>
            <header className="sticky top-0">
                <NavBar/>
            </header>
            <main>
                {children}
            </main>  
        </>
    );
}

export default Layout;