import React, { useState } from 'react'
import './HomeSettingsButtons.scss'
import Button from '../../../../Inputs/Button'

const HomeSettingsButtons: React.FC = () => {
  // TODO: Replace onClick events with something useful

  // TODO: Use global state instead, to prevent losing these states on rerender.
  const [botEnabled, setBotEnabled] = useState(false)
  const [songRequestEnabled, setSongRequestEnabled] = useState(false)
  const [gamblingEnabled, setGamblingEnabled] = useState(false)
  const [autoShoutOutEnabled, setAutoShoutOutEnabled] = useState(false)

  // TODO: Get settings values from database

  // TODO: Call database, to perform changes, for all the click events
  const botSettingClicked = () => {
    setBotEnabled(!botEnabled)
    console.log(botEnabled)
  }

  const songRequestSettingClicked = () => {
    setSongRequestEnabled(!songRequestEnabled)
    console.log(songRequestEnabled)
  }

  const gamblingSettingClicked = () => {
    setGamblingEnabled(!gamblingEnabled)
    console.log(gamblingEnabled)
  }

  const shoutOutSettingClicked = () => {
    setAutoShoutOutEnabled(!autoShoutOutEnabled)
    console.log(autoShoutOutEnabled)
  }

  return (
    <>
      <Button
        className="settings__button--bot"
        hint="Enables/disables LundBot69 on your twitch channel."
        onClick={botSettingClicked}
      >
        Enable LundBot69
      </Button>
      <Button
        className="settings__button--song-request"
        hint="Enables/disables song requests."
        onClick={songRequestSettingClicked}
      >
        Enable song request
      </Button>
      <Button
        className="settings__button--gambling"
        hint="Enables/disables gambling commands."
        onClick={gamblingSettingClicked}
      >
        Enable gambling
      </Button>
      <Button
        className="settings__button--shoutout"
        hint="Enables/disables automatic shoutout of raiding channels."
        onClick={gamblingSettingClicked}
      >
        Enable auto shout-out
      </Button>
    </>
  )
}

export default HomeSettingsButtons
