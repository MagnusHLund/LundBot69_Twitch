import React from 'react'
import './Home.scss'
import ContentBox from '../Content/ContentBox'
import Title from '../Content/Title'
import VideoPlayer from '../Content/VideoPlayer'
import RowHandler from '../Content/RowHandler'
import Button from '../Inputs/Button'

const Home: React.FC = () => {
  return (
    <>
      <ContentBox>
        <Title text="Music" />
        <VideoPlayer width="auto" height="auto" />
        <RowHandler>
          <Button>
            <img
              src="BanUser.png"
              alt="Ban user button"
              className="button__image"
            />
          </Button>
        </RowHandler>
      </ContentBox>
      <ContentBox></ContentBox>
    </>
  )
}

export default Home
