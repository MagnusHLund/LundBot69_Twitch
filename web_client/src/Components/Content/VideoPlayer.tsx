import React, { useEffect } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import './VideoPlayer.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setVideoState } from './../../Redux/Actions/VideoPlayerActions'

interface IVideoPlayerProps {
  controls?: 0 | 1 | 2
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ controls = 2 }) => {
  const dispatch = useDispatch()
  const videoState = useSelector((state) => state.videoPlayer)

  const onPlayerReady = (event) => {
    dispatch(setVideoState({ player: event.target }))
  }

  useEffect(() => {
    if (videoState.player) {
      if (videoState.isPlaying) {
        videoState.player.playVideo()
      } else {
        videoState.player.pauseVideo()
      }
    }
  }, [videoState.isPlaying, videoState.player])

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
      onReady={onPlayerReady}
      className="video-player"
    />
  )
}

export default VideoPlayer
