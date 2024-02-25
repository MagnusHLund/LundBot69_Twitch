import React from 'react'
import './SongRequestBannedUsersSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import SongRequestRefresh from './Subsections/SongRequestRefresh'

const SongRequestBannedUsersSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="sr-banned-users-section">
        <Title text="Banned users" />
        <div className="sr-banned-users-section__container">
          <RowHandler>
            <SongRequestRefresh />
          </RowHandler>
          <RowHandler className="sr-banned-users-section__row-handler--volume">
            display banned users
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestBannedUsersSection
