import React, { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import { useLocation } from '@reach/router'
import { NAV_ACTIONS, useNavDispatch } from "./NavContext";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {

    // const [isNavOpen,setIsNavOpen] = useState(false);
    const location = useLocation();
    const dispatch = useNavDispatch();

    useEffect(() => {
        closeNav();
    }, [location])

    const closeNav = () =>{
        dispatch({
            type:NAV_ACTIONS.SET_NAV,
            payload:false,
        })
    }

    return (
        <>
            <header className="sticky top-0 z-50">
                <NavBar
                />
            </header>
            <main onClick={closeNav}>
                {children}
            </main>  
        </>
    );
}

export default Layout;