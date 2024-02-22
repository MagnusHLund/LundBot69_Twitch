import React from 'react'
import './HomeSettingsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import HomeSettingsSlider from './Subsections/Settings/HomeSettingsSlider'
import HomeSettingsButtons from './Subsections/Settings/HomeSettingsButtons'
import ContentBox from '../../Content/ContentBox'

const HomeSettingsSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-settings-section">
        <Title text="Settings" />
        <div className="home-settings-section__container">
          <RowHandler className="home-settings-section__row-handler--buttons">
            <HomeSettingsButtons />
          </RowHandler>
          <RowHandler className="home-settings-section__row-handler--volume">
            <HomeSettingsSlider
              title="Music volume"
              className="home-settings-section__row-handler--volume--music"
            />
            <HomeSettingsSlider
              title="Effects volume"
              className="home-settings-section__row-handler--volume--effects"
            />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default HomeSettingsSection
