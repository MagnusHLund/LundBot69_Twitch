interface IVideoPlayerAction {
  type: string
  payload: unknown
}

interface IVideoPlayerState {
  videoId: string
  videoTitle: string
  videoTimeStamp: string
  videoDuration: string
  isPlaying: boolean
}

const initialState: IVideoPlayerState = {
  videoId: '9vMLTcftlyI',
  isPlaying: false,
  videoTitle: 'n/a',
  videoDuration: '0',
  videoTimeStamp: '0',
}

const videoPlayerReducer = (
  state = initialState,
  action: IVideoPlayerAction,
) => {
  switch (action.type) {
    case 'VIDEO_PLAY_STATE':
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }
    case 'VIDEO_TITLE':
      return {
        ...state,
        videoTitle: action.payload,
      }
    case 'VIDEO_DURATION':
      return {
        ...state,
        videoDuration: action.payload,
      }
    case 'VIDEO_TIME_STAMP':
      return {
        ...state,
        videoTimeStamp: action.payload,
      }
    default:
      return state
  }
}

export default videoPlayerReducer
