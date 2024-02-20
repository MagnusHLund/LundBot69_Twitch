import React from 'react'
import './HomeSettingsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import HomeSettingsSlider from './Subsections/Settings/HomeSettingsSlider'
import Button from '../../Inputs/Button'
import HomeSettingsButtons from './Subsections/Settings/HomeSettingsButtons'

const HomeSettingsSection: React.FC = () => {
  return (
    <div className="home-settings-section">
      <Title text="Settings" />
      <div className="home-settings-section__container">
        <RowHandler className="home-settings.section__row-handler--buttons">
          <HomeSettingsButtons />
        </RowHandler>
        <RowHandler className="home-settings-section__row-handler--volume">
          <HomeSettingsSlider
            title="Music volume"
            className="home-settings-section__row-handler--volume--music"
          />
          <HomeSettingsSlider
            title="Music volume"
            className="home-settings-section__row-handler--volume--effects"
          />
        </RowHandler>
      </div>
    </div>
  )
}

export default HomeSettingsSection
