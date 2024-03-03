export const setPlayer = (player) => ({
  type: 'SET_PLAYER',
  payload: player,
})

export const setVideoState = (videoState) => ({
  type: 'SET_VIDEO_STATE',
  payload: videoState,
})

export const TOGGLE_PLAY_PAUSE = 'TOGGLE_PLAY_PAUSE'

export const togglePlayPause = () => {
  return (dispatch: any, getState: any) => {
    const { isPlaying } = getState().videoPlayer
    dispatch({ type: TOGGLE_PLAY_PAUSE })
  }
}

// TODO: No work. Fix.
