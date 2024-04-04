import { IAction } from '../IAction'

interface ILoginState {
  sessionToken: string
}

const initialState: ILoginState = {
  sessionToken: '',
}

const loginReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'SET_SESSION_TOKEN':
      return {
        ...state,
        sessionToken: action.payload,
      }
    default:
      return state
  }
}

export default loginReducer
