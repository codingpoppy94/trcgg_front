import React from 'react'
import * as S from '../common/Header.style'
import Logo from '../../Icon/trclogo.svg'
import Searchbar from './Search'
import {Link} from 'react-router-dom'

function MainHeader() {
  return (
    <S.HeaderContainer>
      <div>
        <Link to="/">
          <S.LogoImg src={Logo} alt="로고이미지" />
        </Link>
        <Searchbar name="header" />
        <Link to="/">
          <S.LogoImg src={Logo} alt="로고이미지" />
        </Link>
      </div>
    </S.HeaderContainer>
  )
}

export default MainHeader
