import { useState, useMemo } from 'react'
import {
  VideoPlayerContext,
  VideoPlayerState,
} from '../Contexts/VideoPlayerContext'

interface IVideoPlayerProvider {
  children: React.ReactNode
}

export const VideoPlayerProvider: React.FC<IVideoPlayerProvider> = ({
  children,
}) => {
  const [videoState, setVideoState] = useState<VideoPlayerState>({
    videoId: '9vMLTcftlyI',
    player: null,
  })
  const value = useMemo(() => ({ videoState, setVideoState }), [videoState])
  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  )
}
