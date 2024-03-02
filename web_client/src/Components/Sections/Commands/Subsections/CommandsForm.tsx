import React from 'react'
import './CommandsForm.scss'
import InputForm from '../../../Content/InputForm'
import Title from '../../../Content/Title'
import Inline from '../../../Content/Inline'

interface ICommandsCreateForm {}

const CommandsCreateForm: React.FC<ICommandsCreateForm> = ({}) => {
  return (
    <InputForm
      title="Create command"
      initialValues={undefined}
      submitTitle="Create"
      className="commands-form"
    >
      <input
        type="text"
        placeholder="Command name"
        className="commands-form--input"
      />
      <p className="commands-form--text overline">Permission to use:</p>
      <select className="commands-form--select">
        <option>Everyone</option>
        <option>Follower</option>
        <option>Subscriber</option>
        <option>VIP</option>
        <option>Moderator</option>
        <option>Creator</option>
      </select>
      <Title
        text="Command cooldown (seconds)"
        fontSize="15px"
        className="commands-form--title overline"
      />
      <Inline className="commands-form--inline">
        <div>
          <p className="commands-form--sub-text">Same user</p>
          <input
            type="text"
            placeholder="Cooldown"
            className="commands-form--input"
          />
        </div>
        <div>
          <p className="commands-form--sub-text">Global</p>
          <input
            type="text"
            placeholder="Cooldown"
            className="commands-form--input"
          />
        </div>
      </Inline>
      <div>
        <p className="commands-form--text overline">Command cost</p>
        <input
          type="text"
          placeholder="Cost"
          className="commands-form--input"
        />
      </div>
      <div>
        <p className="commands-form--text overline">Repeat (minutes)</p>
        <input
          type="text"
          placeholder="repeat every..."
          className="commands-form--input"
        />
      </div>
      <p className="commands-form--text overline">Command output</p>
      <input
        type="text"
        placeholder="output"
        className="commands-form--input bottom-space"
      />
    </InputForm>
  )
}

export default CommandsCreateForm
