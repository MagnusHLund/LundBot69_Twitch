import React, { useEffect, useRef } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import './VideoPlayer.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  setVideoDuration,
  setVideoTimeStamp,
  setVideoTitle,
} from '../../Redux/Actions/VideoPlayerActions'
import { RootState } from '../../Redux/Store'

interface IVideoPlayerProps {
  controls?: 0 | 1 | 2
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ controls = 2 }) => {
  const dispatch = useDispatch()
  const playerRef = useRef<YouTube>(null)
  const videoState = useSelector((state: RootState) => state.videoPlayer)

  const onPlayerReady = (event) => {
    if (playerRef.current) {
      dispatch(setVideoTitle(event.target.getVideoData().title))
      dispatch(setVideoDuration(event.target.getDuration()))
    }
  }

  useEffect(() => {
    if (playerRef.current) {
      if (videoState.isPlaying) {
        playerRef.current?.internalPlayer.playVideo()
      } else {
        playerRef.current?.internalPlayer.pauseVideo()
      }
    }
  }, [videoState.isPlaying])

  useEffect(() => {
    if (playerRef.current && videoState.userMovingVideoSlider) {
      playerRef.current.internalPlayer.seekTo(videoState.videoTimeStamp, true)
    }
  }, [videoState.videoTimeStamp, videoState.userMovingVideoSlider])

  const onStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      setInterval(() => {
        const currentTime: number = event.target.getCurrentTime()
        const roundedNumber: string = Math.round(currentTime).toString()
        dispatch(setVideoTimeStamp(roundedNumber))
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
      ref={playerRef}
    />
  )
}

export default VideoPlayer
