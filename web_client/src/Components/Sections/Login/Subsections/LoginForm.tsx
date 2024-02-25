import React from 'react'

interface ILoginForm {
  className?: string
}

const LoginForm: React.FC<ILoginForm> = ({ className = '' }) => {
  // TODO: hide navbar on login page
  return (
    <form className={className}>
      <input
        type="text"
        className={`${className}--username`}
        placeholder="Username"
      />
      <input
        type="password"
        className={`${className}--password`}
        placeholder="Password"
      />
      <input type="submit" value="login" className={`${className}--submit`} />
    </form>
  )
}

export default LoginForm
