import React from 'react'
import './HomeMusicButtons.scss'
import Inline from '../../../../Content/Inline'
import Button from '../../../../Inputs/Button'
import { useDispatch } from 'react-redux'
import { changeVideoPlayState } from '../../../../../Redux/Actions/VideoPlayerActions'

const HomeMusicButtons: React.FC = () => {
  // TODO: Needs a pause button, interchangeable with the play button
  // TODO: Replace onClick events with something useful
  const dispatch = useDispatch()

  const handleTogglePlayPause = () => {
    dispatch(changeVideoPlayState())
  }

  return (
    <Inline className="inline-music-buttons">
      <Button
        className="inline-music-buttons__button--ban-user"
        hint="Bans the person that submitted the current song. This means the user can't request new songs."
        height="35px"
        width="35px"
        isWhite={true}
        onClick={() => console.log('Ban user')}
      />
      <Button
        className="inline-music-buttons__button--resume"
        hint="Resumes the current song."
        height="35px"
        width="35px"
        isWhite={true}
        onClick={handleTogglePlayPause}
      />
      <Button
        className="inline-music-buttons__button--next-song"
        hint="Plays the next song in the queue."
        height="35px"
        width="35px"
        isWhite={true}
        onClick={() => console.log('Next song')}
      />
      <Button
        className="inline-music-buttons__button--ban-song"
        hint="Bans the URL associated with the current song. The same song can not be requested again."
        height="35px"
        width="35px"
        isWhite={true}
        onClick={() => console.log('Ban song')}
      />
    </Inline>
  )
}

export default HomeMusicButtons
