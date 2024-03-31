import { IAction } from '../IAction'

interface ISettingsState {
  musicVolume: number
}

const initialState: ISettingsState = {
  musicVolume: 50,
}

const settingsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'SET_MUSIC_VOLUME':
      return {
        ...state,
        musicVolume: action.payload,
      }
    case 'SET_EFFECTS_VOLUME':
      return {}
    default:
      return state
  }
}

export default settingsReducer
