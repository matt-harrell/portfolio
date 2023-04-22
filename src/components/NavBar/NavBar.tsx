// nav bar container componet 
import React, { useEffect, useState } from 'react'
import NavBarComp from './NavBarComp'
import { globalHistory, useLocation } from '@reach/router'

function NavBar() {

    const [route,setRoute] = useState<string>('');
    const location = useLocation();

useEffect(() => {
    setRoute(window.location.pathname.split('/')[1])
}, [location])

    const navItems = [
        ['About', '/'],
        ['Projects', '/projects'],
        ['Resume', '/resume'],
        ['Contact', '/contact'],
    ]

    return (
        <NavBarComp
            navItems={navItems}
            route={route}
        />
    )
}

export default NavBar