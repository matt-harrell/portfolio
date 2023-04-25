import React, { PropsWithChildren, ReactElement, useEffect } from "react";
import { PageProps } from "gatsby";
import NavBar from "./NavBar/NavBar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {

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