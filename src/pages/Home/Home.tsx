import Searchbar from '../../components/common/Search'
import * as S from './Home.style'
import Logo from '../../Icon/trclogo.svg'
import MainLayout from '../../layout/MainLayout'

function Home() {

  return (
    <MainLayout>
      <S.HomeLayout>
        <S.LogoImg src={Logo} alt="로고이미지" />
        <Searchbar name="Home" />
      </S.HomeLayout>
    </MainLayout>
  )
}

export default Home
