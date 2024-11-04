import React from 'react'
import {Outlet} from 'react-router-dom'
import GlobalStyle from '../styles/global'

function Root() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
