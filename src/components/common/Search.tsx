import {SetStateAction, useState} from 'react'
import * as S from '../common/Search.style'
import {useNavigate} from 'react-router-dom'

function Searchbar({name}: any) {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (event: {target: {value: SetStateAction<string>}}) => {
    setSearchValue(event.target.value)
  }
  const handleSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault()
    navigate(`/Summoners/${searchValue}`)
  }
  return (
    <>
      {name === 'Home' ? (
        <S.HomeSearchForm onSubmit={handleSubmit}>
          <S.HomeSearchInput
            type="search"
            placeholder="클랜원 이름을 검색해보세요"
            value={searchValue}
            onChange={handleInputChange}
          />
        </S.HomeSearchForm>
      ) : (
        <S.SearchForm onSubmit={handleSubmit}>
          <S.SearchInput
            type="search"
            placeholder="클랜원 이름을 검색해보세요"
            value={searchValue}
            onChange={handleInputChange}
          />
        </S.SearchForm>
      )}
    </>
  )
}

export default Searchbar
