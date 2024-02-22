import React from 'react'
import './SongRequest.scss'
import SongRequestDefaultSongsSection from '../Sections/Song request/SongRequestDefaultSongsSection'
import SongRequestRequestedSongsSection from '../Sections/Song request/SongRequestRequestedSongsSection'
import SongRequestAddSongSection from '../Sections/Song request/SongRequestAddSongSection'
import SongRequestAddBanSection from '../Sections/Song request/SongRequestAddBanSection'
import SongRequestBannedSongsSection from '../Sections/Song request/SongRequestBannedSongsSection'
import SongRequestBannedUsersSection from '../Sections/Song request/SongRequestBannedUsersSection'

const SongRequest: React.FC = () => {
  return (
    <>
      <SongRequestDefaultSongsSection />
      <SongRequestRequestedSongsSection />
      <SongRequestAddSongSection />
      <SongRequestAddBanSection />
      <SongRequestBannedSongsSection />
      <SongRequestBannedUsersSection />
    </>
  )
}

export default SongRequest
