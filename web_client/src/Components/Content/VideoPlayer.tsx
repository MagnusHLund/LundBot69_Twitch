import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import './VideoPlayer.scss'

interface IVideoPlayerProps {
  width?: string
  height?: string
  controls?: 0 | 1 | 2
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  width = '520px',
  height = '360px',
  controls = 2,
}) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: height,
    width: width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: controls === 2 ? 0 : controls,
    },
  }
  return (
    <YouTube
      videoId="2g811Eo7K8U"
      opts={opts}
      onReady={onPlayerReady}
      className="video-player"
    />
  )
}

export default VideoPlayer
