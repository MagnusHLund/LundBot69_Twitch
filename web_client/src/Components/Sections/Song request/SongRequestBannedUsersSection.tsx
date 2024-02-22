import React from 'react'
import './SongRequestBannedUsersSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'

const SongRequestBannedUsersSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-settings-section">
        <Title text="Banned users" />
        <div className="home-settings-section__container">
          <RowHandler className="home-settings-section__row-handler--volume">
            display banned users
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestBannedUsersSection
