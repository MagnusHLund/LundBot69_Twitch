import React from 'react'
import './GamblingPointsManagementSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'

// TODO: Maybe a line between each of the row handlers wouldn't look so bad
// TODO: Fix all the wrong class names in this file and most other section file

const GamblingPointsManagementSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-settings-section">
        <Title text="Manage points" />
        <div className="home-settings-section__container">
          <RowHandler className="home-settings-section__row-handler--manage">
            Add or subtract points
          </RowHandler>
          <RowHandler className="home-settings-section__row-handler--manage">
            Adding rules for earning points. Includes multipliers and just
            earning some points when following or whatever happens
          </RowHandler>
          <RowHandler className="home-settings-section__row-handler--manage">
            Wipe all points
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default GamblingPointsManagementSection
