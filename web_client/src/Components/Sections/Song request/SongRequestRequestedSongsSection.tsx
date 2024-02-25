import React from 'react'
import './SongRequestRequestedSongsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import SongRequestRefresh from './Subsections/SongRequestRefresh'

const SongRequestRequestedSongsSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="sr-requested-songs-section">
        <Title text="Requested songs" />
        <div className="sr-requested-songs-section__container">
          <RowHandler className="sr-requested-songs-section__row-handler--buttons">
            <SongRequestRefresh />
          </RowHandler>
          <RowHandler className="sr-requested-songs-section__row-handler--volume">
            display requested songs
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestRequestedSongsSection
