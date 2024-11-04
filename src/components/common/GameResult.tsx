import {useEffect, useState} from 'react'
import * as S from './GameResult.style'
import {ChampNameMapping} from './ChanpionNameMapping'
interface GameResultDataProps {
  gameInfo: {
    game_id: string
    riot_name: string
    champ_name: string
    position: string
    kill: number
    death: number
    assist: number
    game_result: string
    game_team: string
    total_damage_champions: number
    vision_bought: number
    champ_name_en?: string
    champ_name_kr?: string
  }[]
}
interface GameData {
  game_id: string
  riot_name: string
  champ_name: string
  position: string
  kill: number
  death: number
  assist: number
  game_result: string
  game_team: string
  total_damage_champions: number
  vision_bought: number
  champ_name_en?: string
  champ_name_kr?: string
}

const GameResultData: React.FC<GameResultDataProps> = ({gameInfo}) => {
  const [gameData, setGameData] = useState<GameData[]>([])
  console.log(gameData)
  useEffect(() => {
    const fetchGameResultInfo = async () => {
      try {
        // 모든 game_id에 대한 데이터 fetch
        const fetchedData = await Promise.all(
          gameInfo.map(async info => {
            const response = await fetch(
              `{URL}/league/gameResult/${info.game_id}/754305741304627212`
            )
            const data = await response.json()
            return data.map((record: GameData) => ({
              ...record,
              champ_name_en: ChampNameMapping[record.champ_name] || record.champ_name,
              champ_name_kr: record.champ_name
            }))
          })
        )

        // 중첩된 배열을 평면 배열로 변환
        const updatedData = fetchedData.flat()
        setGameData(updatedData)
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error)
      }
    }

    fetchGameResultInfo()
  }, [gameInfo])

  return (
    <S.GameData>
      {gameData.map((data, gameIndex) => (
        <S.GamedataInfo key={gameIndex} gameResult={data.game_result}>
          <S.PlayerName>{data.riot_name}</S.PlayerName>
          <S.ChampionImg
            src={`https://ddragon.leagueoflegends.com/cdn/14.18.1/img/champion/${data.champ_name_en}.png`}
            alt={data.champ_name_kr}
          />
          <S.GameDataChampionName>{data.champ_name_kr}</S.GameDataChampionName>
          <S.GameDataKda>{`${data.kill} / ${data.death} / ${data.assist}`}</S.GameDataKda>
          <S.TotalDamage>{data.total_damage_champions}</S.TotalDamage>
          <S.GameDataWard>{data.vision_bought}개</S.GameDataWard>
        </S.GamedataInfo>
      ))}
    </S.GameData>
  )
}

export default GameResultData
