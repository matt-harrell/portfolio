import React, { Dispatch } from 'react';
import { PropsWithChildren, createContext, useContext, useReducer } from 'react';

/*
need to create a context to handle route state
route state manages where blue bar appears under the nav
*/

const NavContext = createContext<initialStateType>(null!);
export const NavContextDispatch = createContext<Dispatch<any>>(null!);

interface initialStateType {
    route:string
}

// changeed from array to object
const initialState = {
    route:'/',
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

function navReducer(state:initialStateType, action: { type: string; payload: any; }) {
    switch (action.type) {
        case 'update':{
            return {...state,route: action.payload}
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

