import { IAction } from '../IAction'

interface ISettingsState {
  musicVolume: number
  effectsVolume: number
  pinnedMessage: string
  botEnabled: boolean
  songRequestEnabled: boolean
  gamblingEnabled: boolean
  autoShoutOutEnabled: boolean
}

const initialState: ISettingsState = {
  musicVolume: 50,
  effectsVolume: 50,
  pinnedMessage: '',
  botEnabled: false,
  songRequestEnabled: false,
  gamblingEnabled: false,
  autoShoutOutEnabled: false,
}

const settingsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'SET_MUSIC_VOLUME':
      return {
        ...state,
        musicVolume: action.payload,
      }
    case 'SET_EFFECTS_VOLUME':
      return {
        ...state,
        effectsVolume: action.payload,
      }
    case 'SET_PINNED_MESSAGE':
      return {
        ...state,
        pinnedMessage: action.payload,
      }
    case 'SET_BOT_ENABLED':
      return {
        ...state,
        botEnabled: action.payload,
      }
    case 'SET_SONG_REQUEST_ENABLED':
      return {
        ...state,
        songRequestEnabled: action.payload,
      }
    case 'SET_GAMBLING_ENABLED':
      return {
        ...state,
        gamblingEnabled: action.payload,
      }
    case 'SET_AUTO_SHOUTOUT_ENABLED':
      return {
        ...state,
        autoShoutOutEnabled: action.payload,
      }
    default:
      return state
  }
}

export default settingsReducer
