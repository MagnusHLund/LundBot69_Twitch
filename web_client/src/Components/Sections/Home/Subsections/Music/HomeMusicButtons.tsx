import React from 'react'
import './HomeMusicButtons.scss'
import Inline from '../../../../Content/Inline'
import Button from '../../../../Inputs/Button'

const HomeMusicButtons: React.FC = () => {
  // TODO: Needs a pause button, interchangeable with the play button
  // TODO: Replace onClick events with something useful
  const buttonInfo = [
    {
      class: 'ban-user',
      hint: "Bans the person that submitted the current song. This means the user can't request new songs.",
      onClick: () => {
        console.log('ban user')
      },
    },
    {
      class: 'resume',
      hint: 'Resumes the current song.',
      onClick: () => {
        console.log('resume')
      },
    },
    {
      class: 'next-song',
      hint: 'Plays the next song in the queue. ',
      onClick: () => {
        console.log('next')
      },
    },
    {
      class: 'ban-song',
      hint: 'Bans the URL associated with the current song. The same song can not be requested again.',
      onClick: () => {
        console.log('ban song')
      },
    },
  ]

  return (
    <Inline className="inline-music-buttons">
      {buttonInfo.map((button, index) => (
        <Button
          key={index}
          className={`inline-music-buttons__button--${button.class}`}
          hint={button.hint}
          height="35px"
          width="35px"
          isWhite={true}
          onClick={button.onClick}
        />
      ))}
    </Inline>
  )
}

export default HomeMusicButtons
