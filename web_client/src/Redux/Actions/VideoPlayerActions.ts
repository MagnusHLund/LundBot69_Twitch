export const changeVideoPlayState = () => ({
  type: 'CHANGE_VIDEO_PLAY_STATE',
})

export const setVideoTitle = (title: string) => ({
  type: 'SET_VIDEO_TITLE',
  payload: title,
})

export const setVideoDuration = (duration: string) => ({
  type: 'SET_VIDEO_DURATION',
  payload: duration,
})

export const setVideoTimeStamp = (timeStamp: string) => ({
  type: 'SET_VIDEO_TIME_STAMP',
  payload: timeStamp,
})

export const setUserMovingVideoSlider = (moving: boolean) => ({
  type: 'SET_USER_MOVING_VIDEO_SLIDER',
  payload: moving,
})
