interface VideoPlayerAction {
  type: string
  payload: object
}

const initialState = {
  videoId: '9vMLTcftlyI',
  isPlaying: false,
}

const videoPlayerReducer = (
  state = initialState,
  action: VideoPlayerAction,
) => {
  switch (action.type) {
    case 'SET_SHOULD_VIDEO_PLAY':
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }
    case 'IS_VIDEO_PLAYING':
      return {}
    default:
      return state
  }
}

export default videoPlayerReducer
