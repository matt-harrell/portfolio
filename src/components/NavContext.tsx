import React, { Dispatch } from 'react';
import { PropsWithChildren, createContext, useContext, useReducer } from 'react';

/*
need to create a context to handle route state
route state manages where blue bar appears under the nav
*/

const NavContext = createContext<initialStateType>(null!);
export const NavContextDispatch = createContext<Dispatch<any>>(null!);

interface initialStateType {
    route:string;
    isNavOpen:boolean;
    showProjectTiles:boolean;
}

const initialState = {
    route:'/',
    isNavOpen:false,
    showProjectTiles:false,
} as initialStateType;

export const NavProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [routes, dispatch] = useReducer(
        navReducer,
        initialState
    );

    return (
        <NavContext.Provider value={routes}>
            <NavContextDispatch.Provider value={dispatch}>
                {children}
            </NavContextDispatch.Provider>
        </NavContext.Provider>
    );
}

export function useNav() {
    return useContext(NavContext);
}

export function useNavDispatch() {
    return useContext(NavContextDispatch);
}

export const NAV_ACTIONS = {
    UPDATE:'update',
    TOGGLE_NAV:'toggleNav',
    SET_NAV:'setNav',
    SET_SHOW_PROJECT_TILES:'setShowProjectTiles'
}

function navReducer(state:initialStateType, action: { type: string; payload: any; }) {
    switch (action.type) {
        case NAV_ACTIONS.UPDATE:{
            return {...state,route: action.payload}
        }
        case NAV_ACTIONS.TOGGLE_NAV :{
            return {...state,isNavOpen: !action.payload}
        }
        case NAV_ACTIONS.SET_NAV :{
            return {...state,isNavOpen: action.payload}
        }
        case NAV_ACTIONS.SET_SHOW_PROJECT_TILES :{
            return {...state,showProjectTiles: action.payload}
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

