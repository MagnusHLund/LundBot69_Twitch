import React from 'react'
import './SongRequestPage.scss'
import SongRequestDefaultSongsSection from '../Sections/Song request/SongRequestDefaultSongsSection'
import SongRequestRequestedSongsSection from '../Sections/Song request/SongRequestRequestedSongsSection'
import SongRequestAddSongSection from '../Sections/Song request/SongRequestAddSongSection'
import SongRequestAddBanSection from '../Sections/Song request/SongRequestAddBanSection'
import SongRequestBannedSongsSection from '../Sections/Song request/SongRequestBannedSongsSection'
import SongRequestBannedUsersSection from '../Sections/Song request/SongRequestBannedUsersSection'

const SongRequestPage: React.FC = () => {
  return (
    <>
      <SongRequestAddSongSection />
      <SongRequestAddBanSection />
      <SongRequestDefaultSongsSection />
      <SongRequestRequestedSongsSection />
      <SongRequestBannedSongsSection />
      <SongRequestBannedUsersSection />
    </>
  )
}

export default SongRequestPage
