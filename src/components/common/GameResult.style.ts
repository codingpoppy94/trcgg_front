import styled from 'styled-components'
interface RecentlyInfoProps {
  gameResult: string
}

export const GameData = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChampionImg = styled.img`
  margin: 15.5px 0px;
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 20px;
`
export const GamedataInfo = styled.div<RecentlyInfoProps>`
  background-color: ${props => (props.gameResult === '승' ? '#b3cdff' : '#ffbac3')};
`
export const PlayerName = styled.p`
  width: 120px;
  font-size: 20px;
  color: black;
  margin-left: auto;
  text-align: center;
`
export const GameDataKda = styled.p`
  width: 120px;
  font-size: 20px;
  color: black;
  margin-left: auto;
  text-align: center;
`
export const GameDataChampionName = styled.p`
  width: 120px;
  font-size: 20px;
  color: black;
  margin-left: 40px;
  text-align: center;
`
export const TotalDamage = styled.p`
  width: 120px;
  font-size: 20px;
  color: black;
  margin-left: 40px;
  text-align: center;
`
export const GameDataWard = styled.p`
  width: 120px;
  font-size: 20px;
  color: black;
  margin-left: 40px;
  text-align: center;
`
