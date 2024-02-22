import React from 'react'
import './SongRequestAddSongSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'

const SongRequestAddSongSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-settings-section">
        <Title text="Add songs" />
        <div className="home-settings-section__container">
          <RowHandler className="home-settings-section__row-handler--add">
            form to add songs
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestAddSongSection
