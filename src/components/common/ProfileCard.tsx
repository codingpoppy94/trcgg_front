import * as S from '../common/ProfileCard.style'

import MostPickCard from './MostPickCard'
import RecentlyRecordCard from './RecentlyRecordCard'

function ProfileCard() {
  return (
    <S.ProfileContainer>
      <S.ProfileCard>
        <MostPickCard />
        <RecentlyRecordCard />
      </S.ProfileCard>
    </S.ProfileContainer>
  )
}
export default ProfileCard
