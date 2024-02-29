import React from 'react'
import './HomeSettingsButtons.scss'
import Button from '../../../../Inputs/Button'
import InputForm from '../../../../Content/InputForm'

const HomeSettingsButtons: React.FC = () => {
  // TODO: Replace onClick events with something useful
  // TODO: UseState or useReducer to handle the button text
  // TODO: Make the buttons same width and height always

  return (
    <>
      <Button
        className="settings__button--bot"
        hint="Enables/disables LundBot69 on your twitch channel."
        onClick={() => console.log('lundbot69')}
      >
        Enable LundBot69
      </Button>
      <Button
        className="settings__button--song-request"
        hint="Enables/disables song requests."
        onClick={() => console.log('song request')}
      >
        Enable song request
      </Button>
      <Button
        className="settings__button--gambling"
        hint="Enables/disables gambling commands."
        onClick={() => console.log('gambling')}
      >
        Enable gambling
      </Button>
      <Button
        className="settings__button--shoutout"
        hint="Enables/disables automatic shoutout of raiding channels."
        onClick={() => console.log('gambling')}
      >
        Enable auto shout-out
      </Button>
    </>
  )
}

export default HomeSettingsButtons
