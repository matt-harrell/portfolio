import React, { PropsWithChildren, ReactElement } from "react";
import { PageProps } from "gatsby";
import NavBar from "./NavBar/NavBar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <header className="sticky top-0">
                <NavBar/>
            </header>
            {children}
        </>
    );
}

export default Layout;