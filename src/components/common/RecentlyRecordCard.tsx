import * as S from './ProfileCard.style'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {ChampNameMapping} from './ChanpionNameMapping'
import GameResultData from './GameResult'

interface RecentlyRecord {
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
interface GameResult {
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
function RecentlyRecordCard() {
  const {searchValue} = useParams<{searchValue: string}>()
  const [recentlyRecord, setRecentlyRecord] = useState<RecentlyRecord[]>([])
  const [expandedRecordIndex, setExpandedRecordIndex] = useState<number | null>(null)
  const [gameInfo, setGameInfo] = useState<GameResult[]>([])

  useEffect(() => {
    const fetchRecentlyRecordInfo = async () => {
      try {
        const response = await fetch(
          `{URL}/league/getTopTen/${searchValue}/754305741304627212`
        )
        const data = await response.json()
        const updatedData = data.map((record: RecentlyRecord) => ({
          ...record,
          champ_name_en: ChampNameMapping[record.champ_name] || record.champ_name,
          champ_name_kr: record.champ_name
        }))
        setRecentlyRecord(updatedData)
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error)
      }
    }
    const fetchGameResultInfo = async () => {
      try {
        const response = await fetch(
          `{URL}/league/getTopTen/${searchValue}/754305741304627212`
        )
        const data = await response.json()
        setGameInfo(data)
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error)
      }
    }
    fetchGameResultInfo()
    fetchRecentlyRecordInfo()
  }, [searchValue])

  const toggleRecordExpansion = (index: number) => {
    setExpandedRecordIndex(expandedRecordIndex === index ? null : index)
  }

  return (
    <S.BoxContainer>
      <S.Title>RecentlyRecord</S.Title>
      {recentlyRecord.map((data, gameIndex) => (
        <S.RecentlyInfo key={gameIndex} gameResult={data.game_result}>
          <div>
            <S.ChampionImg
              src={`https://ddragon.leagueoflegends.com/cdn/14.18.1/img/champion/${data.champ_name_en}.png`}
              alt={data.champ_name_kr}
            />
            <S.RecentlyChampionName>{data.champ_name_kr}</S.RecentlyChampionName>
            <S.RecentlyRecordKda>{`${data.kill} / ${data.death} / ${data.assist}`}</S.RecentlyRecordKda>
            <S.MatchResult gameResult={data.game_result}>
              {data.game_result}
            </S.MatchResult>
            <S.GameInfo onClick={() => toggleRecordExpansion(gameIndex)}>
              게임 정보
            </S.GameInfo>
          </div>
          {expandedRecordIndex === gameIndex && (
            <GameResultData gameInfo={[gameInfo[gameIndex]]} />
          )}
        </S.RecentlyInfo>
      ))}
    </S.BoxContainer>
  )
}

export default RecentlyRecordCard
