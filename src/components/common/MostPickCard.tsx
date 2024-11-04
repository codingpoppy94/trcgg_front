import * as S from './ProfileCard.style'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {ChampNameMapping} from './ChanpionNameMapping'

interface MostPick {
  champ_name: string
  total_count: number
  win: number
  lose: number
  win_rate: number
  champ_name_en?: string
  champ_name_kr?: string
}

function MostPickCard() {
  const {searchValue} = useParams<{searchValue: string}>()
  const [mostPick, setMostPick] = useState<MostPick[]>([])
  useEffect(() => {
    const fetchMostPickInfo = async () => {
      try {
        const response = await fetch(
          `{URL}/league/getMostPick/${searchValue}/754305741304627212`
        )
        const data = await response.json()
        const updatedData = data.map((record: MostPick) => ({
          ...record,
          champ_name_en: ChampNameMapping[record.champ_name] || record.champ_name, // 영어 이름
          champ_name_kr: record.champ_name // 원래 한글 이름
        }))
        setMostPick(updatedData)
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error)
      }
    }
    fetchMostPickInfo()
  }, [searchValue])

  return (
    <S.MostPickBoxContainers>
      <S.Title>MostPick</S.Title>
      {mostPick?.map((data, gameIndex) => (
        <S.MostPickInfo key={gameIndex}>
          <S.ChampionImg
            src={`https://ddragon.leagueoflegends.com/cdn/14.18.1/img/champion/${data.champ_name_en}.png`}
            alt={data.champ_name_kr}
          />
          <S.ChampionName>{data.champ_name_kr}</S.ChampionName>
          <S.TotalCount>{data.total_count}회</S.TotalCount>
          <S.WinRate>
            {Math.floor(data.win_rate)}
            <span>%</span>
          </S.WinRate>
        </S.MostPickInfo>
      ))}
    </S.MostPickBoxContainers>
  )
}

export default MostPickCard
