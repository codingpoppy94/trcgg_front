import styled from 'styled-components'

interface RecentlyInfoProps {
  gameResult: string
}

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const ProfileCard = styled.div`
  display: grid;
  grid-template-columns: 450px 1200px;
  justify-content: center;
  gap: 50px;
`

export const BoxContainer = styled.div`
  width: 1200px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`
export const MostPickBoxContainers = styled.div`
  width: 450px;
  height: 910px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`
export const BoxContainers = styled.div`
  width: 450px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
`
export const MostPickInfo = styled.div`
  height: 75px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`
export const RecentlyInfo = styled.div<RecentlyInfoProps>`
  background-color: ${props => (props.gameResult === '승' ? '#b3cdff' : '#ffbac3')};
  border-radius: 5px;
  margin-top: 5px;
  padding-left: 20px;

  div {
    display: flex;
    align-items: center;
  }
`

export const ChampionImg = styled.img`
  margin: 15.5px 0px;
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 20px;
`
export const ChampionName = styled.p`
  width: 120px;
  font-size: 20px;
  color: white;
  margin-left: 40px;
  text-align: center;
`
export const RecentlyChampionName = styled.p`
  width: 120px;
  font-size: 20px;
  color: black;
  margin-left: 40px;
  text-align: center;
`
export const Kda = styled.p`
  font-size: 20px;
  color: white;
  margin-left: auto;
`
export const TotalCount = styled.p`
  font-size: 20px;
  width: 60px;
  color: white;
  margin-left: auto;
  text-align: center;
`
export const WinRate = styled.p`
  width: 40px;
  font-size: 20px;
  color: white;
  margin-left: 40px;
  text-align: center;
  span {
    font-size: 19px;
  }
`
export const SummonerName = styled.p`
  font-size: 20px;
  color: white;
  margin-left: 40px;
`
export const MemberWinCount = styled.p`
  width: 60px;
  font-size: 20px;
  color: white;
  margin-left: auto;
  text-align: right;
`
export const MemberLoseCount = styled.p`
  width: 60px;
  font-size: 20px;
  color: white;
  margin-left: 20px;
  text-align: right;
`
export const MemberWinRatio = styled.p`
  width: 60px;
  font-size: 20px;
  color: white;
  margin-left: 20px;
  text-align: right;
`
export const MatchResult = styled.p<RecentlyInfoProps>`
  width: 60px;
  font-size: 20px;
  font-weight: 600;
  color: ${props =>
    props.gameResult === '승'
      ? '#4171d6'
      : '#d31a45'}; // 텍스트 색상 설정  margin-left: 40px;
  text-align: center;
  margin-left: 20px;
`
export const RecentlyRecordKda = styled.p`
  width: 120px;
  font-size: 20px;
  color: black;
  margin-left: auto;
  text-align: center;
`
export const GameInfo = styled.div``
