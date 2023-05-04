import './src/styles/global.css'
import React from 'react';
import {NavProvider} from './src/components/NavContext'


export const wrapRootElement = ({ element }) => {
    return (
      <NavProvider>
        {element}
      </NavProvider>
    )
  }