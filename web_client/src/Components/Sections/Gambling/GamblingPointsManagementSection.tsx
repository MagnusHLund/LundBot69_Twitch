import React from 'react'
import './GamblingPointsManagementSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import GamblingAddSubtractPoints from './Subsections/GamblingAddSubtractPoints'
import Button from '../../Inputs/Button'
import InputForm from '../../Content/InputForm'
import Conditions from '../../Content/Conditions'

// TODO: Maybe a line between each of the row handlers wouldn't look so bad
// TODO: Fix all the wrong class names in this file and most other section file

const GamblingPointsManagementSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="gambling-points-management-section">
        <Title text="Manage points" />
        <div className="gambling-points-management-section__container">
          <RowHandler className="gambling-points-management-section__row-handler--manage-add underline">
            <GamblingAddSubtractPoints />
          </RowHandler>{' '}
          {/* TODO: Add this after release
          <RowHandler className="gambling-points-management-section__row-handler--manage-earn underline">
            <Conditions />
          </RowHandler>
          <RowHandler className="gambling-points-management-section__row-handler--manage-multiply underline">
            <Conditions />
          </RowHandler> */}
          <RowHandler className="gambling-points-management-section__row-handler--manage-wipe">
            <p>
              By clicking this button, you do a channel wide points wipe, for
              all your viewers
            </p>
            <Button
              className="gambling-points-management-section__row-handler--manage-wipe--button"
              width="auto"
            >
              Wipe all points
            </Button>
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default GamblingPointsManagementSection
