import styled from 'styled-components'

export const HomeLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
  }
`
export const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: -1;
`
export const LogoImg = styled.img`
  margin-top: 140px;
  width: 280px;
  height: 280px;
  object-fit: contain;
`
