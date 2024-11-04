import * as S from '../common/HeaderProfile.style'
import Logo from '../../Icon/trclogo.svg'
import {useParams} from 'react-router-dom'

interface Record {
  position?: string
  total_count?: number
  win?: number
  lose?: number
  win_rate?: number
  kda?: number
}
interface MostPick {
  champ_name: string
  total_count: number
  win: number
  lose: number
  win_rate: number
  champ_name_en?: string
  champ_name_kr?: string
}
interface MonthData {
  total_count: number
  win: number
  lose: number
  win_rate: number
  kda: number
}
interface HeaderProfileProps {
  getRecord: Record[]
  getMostPick: MostPick[]
  getMonthData: MonthData[]
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({
  getRecord,
  getMostPick,
  getMonthData
}) => {
  const {searchValue} = useParams<{searchValue: string}>()
  const mostPickedChampion =
    getMostPick && getMostPick.length > 0
      ? getMostPick[0].champ_name_en || 'defaultChampion'
      : 'defaultChampion'
  const backgroundImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${mostPickedChampion}_0.jpg`

  const calculateTotal = (records: Record[]) => {
    const total = {
      total_count: 0,
      win: 0,
      lose: 0,
      win_rate: 0
    }

    records.forEach(data => {
      total.total_count += data.total_count || 0
      total.win += data.win || 0
      total.lose += data.lose || 0
    })

    if (total.total_count > 0) {
      total.win_rate = (total.win / total.total_count) * 100
    }

    return total
  }

  // 계산된 결과
  const totalRecord = calculateTotal(getRecord)

  const currentMonthData: MonthData =
    getMonthData.length > 0
      ? getMonthData[0]
      : {total_count: 0, win: 0, lose: 0, win_rate: 0, kda: 0}
  return (
    <S.HeaderProfileContainer>
      <S.ProfileContainer backgroundImage={backgroundImage}>
        <S.ProfileInfo>
          <S.LogoImg src={Logo} alt="로고이미지" />
          <S.ProfileText>
            <S.ProfileNickname>{searchValue}</S.ProfileNickname>
            <S.AllGameRecord>
              <p>전체</p>
              <p>{`${totalRecord.total_count}전 ${totalRecord.win}승 ${totalRecord.lose}패(${totalRecord.win_rate.toFixed(2)}%)`}</p>
            </S.AllGameRecord>
            <S.MonthGameRecord>
              <p>이번달</p>
              <p>{`${currentMonthData?.total_count}전 ${currentMonthData?.win}승 ${currentMonthData?.lose}패(${currentMonthData?.win_rate}%)`}</p>
            </S.MonthGameRecord>
          </S.ProfileText>
        </S.ProfileInfo>
      </S.ProfileContainer>
    </S.HeaderProfileContainer>
  )
}
export default HeaderProfile
