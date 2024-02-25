import React from 'react'
import './GamblingPointsManagementSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import GamblingAddSubtractPoints from './Subsections/GamblingAddSubtractPoints'
import Button from '../../Inputs/Button'

// TODO: Maybe a line between each of the row handlers wouldn't look so bad
// TODO: Fix all the wrong class names in this file and most other section file

const GamblingPointsManagementSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="gambling-points-management-section">
        <Title text="Manage points" />
        <div className="gambling-points-management-section__container">
          <RowHandler className="gambling-points-management-section__row-handler--manage">
            Add or subtract points
            <GamblingAddSubtractPoints />
          </RowHandler>
          <RowHandler className="gambling-points-management-section__row-handler--manage">
            Adding rules for earning points. Includes multipliers and just
            earning some points when following or whatever happens
          </RowHandler>
          <RowHandler className="gambling-points-management-section__row-handler--manage">
            <Button>Wipe all points</Button>
            <p>
              By clicking this button, you do a channel wide points wipe, for
              all your viewers
            </p>
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default GamblingPointsManagementSection
