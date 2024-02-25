import React from 'react'
import './SongRequestDefaultSongsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import SongRequestRefresh from './Subsections/SongRequestRefresh'

const SongRequestDefaultSongsSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="sr-default-songs-section">
        <Title text="Default songs" />
        <div className="sr-default-songs-section__container">
          <RowHandler className="sr-default-songs-section__row-handler--buttons">
            <SongRequestRefresh />
          </RowHandler>
          <RowHandler className="sr-default-songs-section__row-handler--volume">
            display default songs
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestDefaultSongsSection
