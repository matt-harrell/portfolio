// todo pass nav logic close logic from layout to navbar comp
import React, { useEffect, useState } from 'react'
import NavBarComp from './NavBarComp'
import { useLocation,createHistory } from '@reach/router'
import { useNavDispatch } from '../NavContext';

interface NavBarProps {
    isNavOpen:boolean;
    handleClick:(isOpen:boolean) => void;
}


function NavBar({isNavOpen,handleClick}:NavBarProps) {

    const [route, setRoute] = useState<string>('');
    const location = useLocation();
    const dispatch = useNavDispatch();

    useEffect(() => {
        if (window.location.href.includes('#')) {
            const url = window.location.href.split('#');
            dispatch({
                type:'update',
                payload:url[url.length - 1]
            })
        } else {
            const url = window.location.href.split('/');
            dispatch({
                type:'update',
                payload:url[url.length - 1]
            })
        }
    }, [location])

    const navItems = [
        ['About', '/'],
        ['Projects', '/#projects'],
        ['Resume', '/resume'],
        ['Contact', '/#contact'],
    ]

    return (
        <NavBarComp
            navItems={navItems}
            isNavOpen={isNavOpen}
            handleClick={handleClick}
        />
    )
}

export default NavBar