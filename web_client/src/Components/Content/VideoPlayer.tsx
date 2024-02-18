import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

interface VideoPlayerProps {
  width?: string
  height?: string
  controls?: 0 | 1 | 2
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
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
    <div className="video-player-container">
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
      {controls === 2 && (
        <div
          className="test"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </div>
  )
}

export default VideoPlayer
