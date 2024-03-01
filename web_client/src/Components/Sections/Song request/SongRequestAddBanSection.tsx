import React from 'react'
import './SongRequestAddBanSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import SongRequestForm from './Subsections/SongRequestForm'

const SongRequestAddBanSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="sr-add-ban-section">
        <div className="sr-add-ban-section--content">
          <RowHandler className="sr-add-ban-section--content--add">
            <SongRequestForm
              type={'bans'}
              className="sr-add-ban-section--content--add-form"
            />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestAddBanSection
