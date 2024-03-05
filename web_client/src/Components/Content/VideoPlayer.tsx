import React, { useEffect, useRef } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import './VideoPlayer.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  videoDuration,
  videoTimeStamp,
  videoTitle,
} from '../../Redux/Actions/VideoPlayerActions'

interface IVideoPlayerProps {
  controls?: 0 | 1 | 2
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ controls = 2 }) => {
  const dispatch = useDispatch()
  const playerRef = useRef(null)
  const videoState = useSelector((state) => state.videoPlayer)

  const onPlayerReady = (event) => {
    console.log('on ready')
    playerRef.current = event.target
    dispatch(videoTitle(event.target.videoTitle))
    dispatch(videoDuration(event.target.getDuration()))
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

  const onStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      setInterval(() => {
        const currentTime: number = event.target.getCurrentTime()
        const roundedNumber: string = Math.round(currentTime).toString()
        dispatch(videoTimeStamp(roundedNumber))
      }, 1000)
    }
  }

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
      onStateChange={onStateChange}
    />
  )
}

export default VideoPlayer
