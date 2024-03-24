import { IAction } from '../IAction'

interface ILoginState {}

const initialState: ILoginState = {}

const loginReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default loginReducer
