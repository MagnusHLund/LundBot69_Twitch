import React from 'react'
import './SongRequestBannedSongsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import SongRequestRefresh from './Subsections/SongRequestRefresh'

const SongRequestBannedSongsSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="sr-banned-songs-section">
        <Title text="Banned songs" />
        <div className="sr-banned-songs-section__container">
          <RowHandler>
            <SongRequestRefresh />
          </RowHandler>
          <RowHandler className="sr-banned-songs-section__row-handler--volume">
            display banned songs
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestBannedSongsSection
