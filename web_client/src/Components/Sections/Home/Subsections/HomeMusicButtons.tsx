import React from 'react'
import './HomeMusicButtons.scss'
import Inline from '../../../Content/Inline'
import Button from '../../../Inputs/Button'

const HomeMusicButtons: React.FC = () => {
  {
    /* TODO: Is this the right approach? Creating an object for it does not seem read-friendly, 
    however this code is just repeating. Will come back to this one. */
  }
  return (
    <Inline>
      <Button>
        <img
          //src="BanUser.png"
          alt="Ban user button"
          className="button__image"
        />
      </Button>
      <Button>
        <img
          //src="Resume.png"
          alt="Next video button"
          className="button__image"
        />
      </Button>
      <Button>
        <img
          //src="BanSong.png"
          alt="Ban song button"
          className="button__image"
        />
      </Button>
      <Button>
        <img
          //src="BanUser.png"
          alt="Ban user button"
          className="button__image"
        />
      </Button>
    </Inline>
  )
}

export default HomeMusicButtons
