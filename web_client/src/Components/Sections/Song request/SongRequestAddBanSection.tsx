import React from 'react'
import './SongRequestAddBanSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'

const SongRequestAddBanSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-settings-section">
        <Title text="Add bans" />
        <div className="home-settings-section__container">
          <RowHandler className="home-settings-section__row-handler--add">
            form to add ban
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestAddBanSection
