import React, {useEffect, useState} from 'react'
import MainLayout from '../../layout/MainLayout'
import MainHeader from '../../components/common/Header'
import HeaderProfile from '../../components/common/HeaderProfile'
import ProfileCard from '../../components/common/ProfileCard'
import {useParams} from 'react-router-dom'
import {ChampNameMapping} from '../../components/common/ChanpionNameMapping'

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

function Summoners() {
  const {searchValue} = useParams<{searchValue: string}>()
  const [getRecord, setGetRecord] = useState<Record[]>([]) // 빈 배열로 초기화
  const [getMostPick, setGetMostPick] = useState<MostPick[]>([])
  const [getMonthData, setGetMonthData] = useState<MonthData[]>([])
  useEffect(() => {
    const fetchGetAllRecord = async () => {
      try {
        const response = await fetch(
          `{URL}/league/getRecord/${searchValue}/754305741304627212`
        )
        const data = await response.json()
        setGetRecord(data)
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error)
      }
    }
    const fetchGetMonthData = async () => {
      try {
        const response = await fetch(
          `{URL}/league/getRecordMonth/${searchValue}/754305741304627212`
        )
        const data = await response.json()
        setGetMonthData(data)
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error)
      }
    }
    const fetchGetMostPick = async () => {
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
        setGetMostPick(updatedData)
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error)
      }
    }
    fetchGetAllRecord()
    fetchGetMonthData()
    fetchGetMostPick()
  }, [searchValue])

  return (
    <MainLayout>
      <MainHeader />
      <HeaderProfile
        getRecord={getRecord}
        getMostPick={getMostPick}
        getMonthData={getMonthData}
      />
      <ProfileCard />
    </MainLayout>
  )
}

export default Summoners
