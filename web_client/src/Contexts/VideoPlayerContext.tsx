import { createContext, Dispatch, SetStateAction } from 'react'

export interface VideoPlayerState {
  videoId: string | null
  player: unknown | null
}

interface VideoPlayerContextType {
  videoState: VideoPlayerState
  setVideoState: Dispatch<SetStateAction<VideoPlayerState>>
}

// Create a context for the video player
export const VideoPlayerContext = createContext<VideoPlayerContextType>({
  videoState: { videoId: null, player: null },
  setVideoState: () => {},
})
