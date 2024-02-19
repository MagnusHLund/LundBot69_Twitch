import React from 'react'
import './HomeSettingsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import Slider from '../../Inputs/Slider'

const HomeSettingsSection: React.FC = () => {
  return (
    <div className="home-settings-section">
      <Title text="Settings" />
      <div className="home-settings-section__container">
        <RowHandler className="home-settings.section__row-handler--toggles">
          {/* Reuse HomeMusicButtons.tsx? */} t
        </RowHandler>
        <RowHandler className="home-settings-section__row-handler--volume">
          <RowHandler className="home-settings-section__row-handler--volume--music">
            <Title text="Music volume" fontSize="18px" />
            <Slider />
          </RowHandler>
          <RowHandler className="home-settings-section__row-handler--volume--effects">
            <Title text="Effects volume" fontSize="18px" />
            <Slider />
          </RowHandler>
        </RowHandler>
      </div>
    </div>
  )
}

export default HomeSettingsSection
