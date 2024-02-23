import React from 'react'
import './LoginForm.scss'

interface ILoginForm {
  className?: string
}

const LoginForm: React.FC<ILoginForm> = ({ className = '' }) => {
  // TODO: hide navbar on login page
  return (
    <form className={className}>
      <input type="text" className="username" placeholder="Username" />
      <input type="password" className="password" placeholder="Password" />
      <input type="submit" title="button" className="" />
    </form>
  )
}

export default LoginForm
