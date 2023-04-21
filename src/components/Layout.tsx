import React, { PropsWithChildren, ReactElement } from "react";
import { PageProps } from "gatsby";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    nav
                </nav>
            </header>
            {children}
        </>
    );
}

export default Layout;