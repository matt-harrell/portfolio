import React, { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import { useLocation } from '@reach/router'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {

    const [isNavOpen,setIsNavOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        closeNav();
    }, [location])

    const handleClick = (isOpen:boolean) => {
        setIsNavOpen(!isOpen);
    }

    const closeNav = () =>{
        if(isNavOpen){
            setIsNavOpen(false);
        }
    }

    return (
        <>
            <header className="sticky top-0">
                <NavBar
                   handleClick={handleClick}
                   isNavOpen={isNavOpen} 
                />
            </header>
            <main onClick={closeNav}>
                {children}
            </main>  
        </>
    );
}

export default Layout;