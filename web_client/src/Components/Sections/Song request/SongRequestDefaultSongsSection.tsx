import React from 'react'
import './SongRequestDefaultSongsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'

const SongRequestDefaultSongsSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-settings-section">
        <Title text="Default songs" />
        <div className="home-settings-section__container">
          <RowHandler className="home-settings-section__row-handler--buttons">
            Refresh list manually, show time since last refresh
          </RowHandler>
          <RowHandler className="home-settings-section__row-handler--volume">
            display default songs
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestDefaultSongsSection
