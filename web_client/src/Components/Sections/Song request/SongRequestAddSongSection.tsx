import React from 'react'
import './SongRequestAddSongSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import SongRequestForm from './Subsections/SongRequestForm'

const SongRequestAddSongSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="sr-add-song-section">
        <div className="sr-add-song-section--content">
          <RowHandler className="sr-add-song-section--content--add">
            <SongRequestForm
              type={'songs'}
              className="sr-add-song-section--content--add-form"
            />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestAddSongSection
