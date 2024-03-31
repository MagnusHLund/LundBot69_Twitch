import React from 'react'
import './HomeSettingsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import HomeSettingsSlider from './Subsections/Settings/HomeSettingsSlider'
import HomeSettingsButtons from './Subsections/Settings/HomeSettingsButtons'
import ContentBox from '../../Content/ContentBox'
import InputForm from '../../Content/InputForm'

// TODO: Sliders should use cookies to store the last set position. To avoid the user having to set the value each time they visit the page.

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
              cookieName="MusicVolume"
            />
            {/* Having effects would be version 2
            <HomeSettingsSlider
              title="Effects volume"
              className="home-settings-section__row-handler--volume--effects"
              cookieName="EffectsVolume" 
            /> */}
          </RowHandler>
          <RowHandler>
            <Title text="Auto pin message" />
            <InputForm
              title={'if empty, setting is disabled'}
              initialValues={undefined}
              submitTitle="save"
            >
              <input
                type="text"
                placeholder="Pin message"
                className="settings__form--input"
              />
            </InputForm>
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default HomeSettingsSection
