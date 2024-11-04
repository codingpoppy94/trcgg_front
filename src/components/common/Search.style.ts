import styled from 'styled-components'
import Search from '../../Icon/search-icon.svg'

export const HomeSearchForm = styled.form`
  background-color: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`
export const SearchForm = styled.form`
  background-color: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`
export const HomeSearchInput = styled.input`
  font-size: 16px;
  color: white;
  background-color: black;
  position: relative;
  width: 900px;
  height: 70px;
  border-radius: 10px;
  padding: 20px 40px;
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: right 30px center;
  background-size: 30px;
  border: 1px solid white;
  &::placeholder {
    font-size: 16px;
    color: #ccc;
  }
`
export const SearchInput = styled.input`
  font-size: 16px;
  color: white;
  background-color: black;
  position: relative;
  width: 900px;
  height: 60px;
  border-radius: 10px;
  padding: 20px 40px;
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: right 30px center;
  background-size: 30px;
  border: 1px solid white;
  &::placeholder {
    font-size: 16px;
    color: #ccc;
  }
`
