import React from 'react'
import './Gambling.scss'
import GamblingLeaderBoardSection from '../Sections/Gambling/GamblingLeaderBoardSection'
import GamblingPointsManagementSection from '../Sections/Gambling/GamblingPointsManagementSection'

const Gambling: React.FC = () => {
  return (
    <>
      <GamblingLeaderBoardSection />
      <GamblingPointsManagementSection />
    </>
  )
}

export default Gambling
