import React, { useEffect, useRef } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import './VideoPlayer.scss'
import { useSelector } from 'react-redux'

interface IVideoPlayerProps {
  controls?: 0 | 1 | 2
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ controls = 2 }) => {
  const playerRef = useRef(null)
  const videoState = useSelector((state) => state.videoPlayer)

  const onPlayerReady = (event) => {
    playerRef.current = event.target
  }

  useEffect(() => {
    console.log(videoState.isPlaying)
    if (playerRef.current) {
      if (videoState.isPlaying) {
        playerRef.current.playVideo()
      } else {
        playerRef.current.pauseVideo()
      }
    }
  }, [videoState.isPlaying])

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 1,
      controls: controls === 2 ? 0 : controls,
    },
  }

  return (
    <YouTube
      videoId={videoState.videoId}
      opts={opts}
      className="video-player"
      onReady={onPlayerReady}
    />
  )
}

export default VideoPlayer
function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}
