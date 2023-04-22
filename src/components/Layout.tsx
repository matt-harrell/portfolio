import React, { PropsWithChildren, ReactElement } from "react";
import { PageProps } from "gatsby";
import NavBar from "./NavBar/NavBar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            {children}
        </>
    );
}

export default Layout;