import React from 'react'
import './SongRequestBannedSongsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'

const SongRequestBannedSongsSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-settings-section">
        <Title text="Banned songs" />
        <div className="home-settings-section__container">
          <RowHandler className="home-settings-section__row-handler--volume">
            display banned songs
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestBannedSongsSection
