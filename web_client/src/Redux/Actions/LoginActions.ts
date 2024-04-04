import axios from 'axios'
import { baseApiUrl } from '../../Utils/BaseUrl'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const setTwitchCode = createAsyncThunk(
  'session/setTwitchCode',
  async (code: string) => {
    const Dispatch = useDispatch()
    const url: string = `${baseApiUrl()}/v1/twitch/connectUser`

    try {
      const response = await axios.post(url, { code })

      Dispatch({ type: 'SET_SESSION_TOKEN', payload: response.data })
    } catch (error) {
      console.log(error)
      //window.location.href = '/login?error=networkError'
    }
  },
)
