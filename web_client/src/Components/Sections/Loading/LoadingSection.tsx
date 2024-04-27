import React from 'react'
import './LoadingSection.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../Redux/Store'
import { setTwitchCode } from '../../../Redux/Actions/LoginActions'
import { useNavigate } from 'react-router-dom'

const LoadingSection: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  if (code) {
    dispatch(setTwitchCode(code)).then(() => navigate('/home'))
  } else {
    window.location.href = '/login?error=invalidCode'
  }

  return (
    <div className="loading">
      <img
        src="LundBot69 loading.gif"
        className="loading__gif"
        alt="loading..."
      />
    </div>
  )
}

export default React.memo(LoadingSection)
