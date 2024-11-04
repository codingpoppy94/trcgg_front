import styled from 'styled-components'

interface HeaderProfileContainerProps {
  backgroundImage: string
}

export const HeaderProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const ProfileContainer = styled.div<HeaderProfileContainerProps>`
  position: relative;
  width: 1700px;
  height: 250px;
  border-radius: 5px;
  border: 1px solid white;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0.3) 60%,
    rgba(0, 0, 0, 0.95) 90%,
    rgba(0, 0, 0, 1) 100%
  );
  overflow: hidden; // ::after의 이미지가 밖으로 나가지 않도록 설정

  &::after {
    content: '';
    width: 1000px;
    height: 400px;
    position: absolute;
    top: -40px;
    right: 0px;
    bottom: 0;
    left: 600px;
    background: url(${props => props.backgroundImage}) no-repeat;
    background-size: cover;
    background-position: ${props =>
      ['Skarner', 'Gnar', 'Zac'].some(name => props.backgroundImage.includes(name))
        ? 'bottom'
        : 'center top'};
    z-index: -1; // 필요에 따라 조정
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  margin-top: 45px;
  margin-left: 40px;
  gap: 50px;
`

export const LogoImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`

export const ProfileNickname = styled.h1`
  font-size: 35px;
  color: white;
  padding-bottom: 25px;
`

export const AllGameRecord = styled.div`
  display: flex;
  gap: 40px;

  p {
    font-size: 20px;
    color: white;
    padding-bottom: 20px;
  }
`

export const MonthGameRecord = styled.div`
  display: flex;
  gap: 20px;

  p {
    font-size: 20px;
    color: white;
  }
`
