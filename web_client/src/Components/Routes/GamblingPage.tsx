import React from 'react'
import './GamblingPage.scss'
import GamblingLeaderBoardSection from '../Sections/Gambling/GamblingLeaderBoardSection'
import GamblingPointsManagementSection from '../Sections/Gambling/GamblingPointsManagementSection'

const GamblingPage: React.FC = () => {
  return (
    <>
      <GamblingLeaderBoardSection />
      <GamblingPointsManagementSection />
    </>
  )
}

export default GamblingPage
