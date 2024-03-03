import React, { useEffect, useState } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import './VideoPlayer.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setVideoState } from './../../Redux/Actions/VideoPlayerActions'

interface IVideoPlayerProps {
  controls?: 0 | 1 | 2
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ controls = 2 }) => {
  const dispatch = useDispatch()
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const videoState = useSelector((state) => state.videoPlayer)

  const onPlayerStateChange = (event: { data: number }) => {
    // Checks if the video is playing or not
    // 1 = Playing, 2 = Paused
    setIsPlaying(event.data === 1)
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
      onStateChange={onPlayerStateChange}
      className="video-player"
    />
  )
}

export default VideoPlayer
