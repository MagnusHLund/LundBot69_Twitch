import React from 'react'
import './Home.scss'
import ContentBox from '../Content/ContentBox'
import Title from '../Content/Title'
import VideoPlayer from '../Content/VideoPlayer'
import RowHandler from '../Content/RowHandler'
import Button from '../Inputs/Button'
import Slider from '../Inputs/Slider'

const Home: React.FC = () => {
  // TODO: Split different segments (ContentBoxes, into its own component)
  return (
    <>
      <ContentBox>
        <Title text="Music" />
        <VideoPlayer width="auto" height="auto" />
        <RowHandler>
          {/* TODO: Is this the right approach? Creating an object for it does not seem read-friendly, 
              however this code is just repeating. Will come back to this one. */}
          {/* TODO: Make buttons inline */}
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
          <Slider />
        </RowHandler>
      </ContentBox>
      <ContentBox></ContentBox>
    </>
  )
}

export default Home
