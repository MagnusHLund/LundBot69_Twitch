import React from 'react'
import './SongRequestRequestedSongsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'

const SongRequestRequestedSongsSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-settings-section">
        <Title text="Requested songs" />
        <div className="home-settings-section__container">
          <RowHandler className="home-settings-section__row-handler--buttons">
            Refresh list manually, show time since last refresh
          </RowHandler>
          <RowHandler className="home-settings-section__row-handler--volume">
            display requested songs
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestRequestedSongsSection
