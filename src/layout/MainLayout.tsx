import React from 'react'

import * as S from '../pages/Home/Home.style'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const MainLayout = ({children}: Props) => {
  return (
    <>
      <S.BackgroundLayer />

      <div>{children}</div>
    </>
  )
}

export default MainLayout
