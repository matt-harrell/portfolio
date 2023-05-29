// todo pass nav logic close logic from layout to navbar comp
import React, { useEffect, useState } from 'react'
import NavBarComp from './NavBarComp'
import { useLocation } from '@reach/router'
import { NAV_ACTIONS, useNav, useNavDispatch } from '../NavContext';


function NavBar() {
    const location = useLocation();
    const dispatch = useNavDispatch();
    const {isNavOpen} = useNav() || false;
    const {route} = useNav() || '/';
    const [isHover,setIsHover] = useState(false);
    const [hoverLinkTarget,setHoverLinkTarget] = useState<null | string>(null);
    const windowLocation = useLocation();

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
                payload:url[3]
            })
        }
    }, [location])

    const navItems = [
        ['About', '/'],
        ['Projects', '/#projects'],
        ['Contact', '/#contact'],
    ]

    const toggleOpacity = (url:string):string => {
        if (url.replace('/', '').replace("#", '') === route) {
            return ' opacity-100'
        } else {
            return ' opacity-0'
        }
    }

    const toggleBold = (url:string):string => {
        if (url.replace('/', '').replace("#", '') === route) {
            return ' font-bold';
        }else{
            return '';
        }
    }

    const handleMouseEnter = (url:string| null = null) => {
        setIsHover(true);
        setHoverLinkTarget(url)
    }

    const handleMouseLeave = () => {
        setIsHover(false);
        setHoverLinkTarget(null)
    }

    const handleClick = (isOpen:boolean) => {
        dispatch({
            type:NAV_ACTIONS.TOGGLE_NAV,
            payload:isOpen,
        })
    }

    return (
        <NavBarComp
            navItems={navItems}
            isNavOpen={isNavOpen}
            handleClick={handleClick}
            toggleOpacity={toggleOpacity}
            toggleBold={toggleBold}
            isHover={isHover}
            windowLocation={windowLocation}
            handleMouseEnter={handleMouseEnter}
            hoverLinkTarget={hoverLinkTarget}
            handleMouseLeave={handleMouseLeave}
        />
    )
}

export default NavBar