import * as S from './ProfileCard.style'
import Top from '../../Icon/Top.png'
import Jugle from '../../Icon/Jugle.png'
import Middle from '../../Icon/Middle.png'
import Adcarry from '../../Icon/AdCarry.png'
import Suport from '../../Icon/Suport.png'

function GoodTeamMemberCard() {
  return (
    <S.BoxContainers>
      <S.Title>BadMember</S.Title>
      <S.MostPickInfo>
        <S.ChampionImg src={Top} alt="챔피언 이미지" />
        <S.SummonerName>Freyaa</S.SummonerName>
        <S.MemberWinCount>156회</S.MemberWinCount>
        <S.MemberLoseCount>0회</S.MemberLoseCount>
        <S.MemberWinRatio>100%</S.MemberWinRatio>
      </S.MostPickInfo>
      <S.MostPickInfo>
        <S.ChampionImg src={Jugle} alt="챔피언 이미지" />
        <S.ChampionName>궈든든</S.ChampionName>
        <S.MemberWinCount>66회</S.MemberWinCount>
        <S.MemberLoseCount>22회</S.MemberLoseCount>
        <S.MemberWinRatio>87%</S.MemberWinRatio>
      </S.MostPickInfo>
      <S.MostPickInfo>
        <S.ChampionImg src={Middle} alt="챔피언 이미지" />
        <S.ChampionName>매실카레포도</S.ChampionName>
        <S.MemberWinCount>46회</S.MemberWinCount>
        <S.MemberLoseCount>30회</S.MemberLoseCount>
        <S.MemberWinRatio>69%</S.MemberWinRatio>
      </S.MostPickInfo>
      <S.MostPickInfo>
        <S.ChampionImg src={Adcarry} alt="챔피언 이미지" />
        <S.ChampionName>새벽에이슬</S.ChampionName>
        <S.MemberWinCount>156회</S.MemberWinCount>
        <S.MemberLoseCount>12회</S.MemberLoseCount>
        <S.MemberWinRatio>56%</S.MemberWinRatio>
      </S.MostPickInfo>
      <S.MostPickInfo>
        <S.ChampionImg src={Suport} alt="챔피언 이미지" />
        <S.ChampionName>샛별담은누리</S.ChampionName>
        <S.MemberWinCount>156회</S.MemberWinCount>
        <S.MemberLoseCount>123회</S.MemberLoseCount>
        <S.MemberWinRatio>51%</S.MemberWinRatio>
      </S.MostPickInfo>
    </S.BoxContainers>
  )
}
export default GoodTeamMemberCard
