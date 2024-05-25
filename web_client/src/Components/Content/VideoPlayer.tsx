import React, { useEffect, useRef } from 'react'
import YouTube from 'react-youtube'
import { useDispatch, useSelector } from 'react-redux'
import {
  setVideoDuration,
  setVideoTimeStamp,
  setVideoTitle,
  setUserMovingVideoSlider,
} from '../../Redux/Actions/VideoPlayerActions'
import { RootState } from '../../Redux/Store'
import './VideoPlayer.scss'

interface IVideoPlayerProps {
  controls?: 0 | 1 | 2
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ controls = 2 }) => {
  const dispatch = useDispatch()
  const playerRef = useRef<YouTube>(null)
  const videoState = useSelector((state: RootState) => state.videoPlayer)

  useEffect(() => {
    const player = playerRef.current?.internalPlayer

    if (player) {
      videoState.isPlaying ? player.playVideo() : player.pauseVideo()
    }
  }, [videoState.isPlaying])

  useEffect(() => {
    const player = playerRef.current?.internalPlayer

    if (player && videoState.userMovingVideoSlider) {
      player.seekTo(videoState.videoTimeStamp, true)
      dispatch(setUserMovingVideoSlider(false))
    }
  }, [videoState.videoTimeStamp, videoState.userMovingVideoSlider, dispatch])

  useEffect(() => {
    onPlayerEnd()
  }, [])

  const onPlayerReady = (event: { target: YouTube }) => {
    const player = event.target
    console.log('player ready') // TODO: Remove console.log
    dispatch(setVideoTitle(player.getVideoData().title))
    dispatch(setVideoDuration(player.getDuration()))
  }

  const onStateChange = (event: { target: YouTube; data: number }) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      const intervalId = setInterval(() => {
        const currentTime = event.target.getCurrentTime()
        dispatch(setVideoTimeStamp(Math.round(currentTime).toString()))
      }, 1000)

      return () => clearInterval(intervalId)
    }
  }

  const onPlayerEnd = () => {
    console.log('player done') // TODO: Remove console.log
  }

  const opts: YouTube.Options = {
    playerVars: {
      autoplay: 0,
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
      onEnd={onPlayerEnd}
    />
  )
}

export default VideoPlayer
