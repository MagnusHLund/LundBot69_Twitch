import React from 'react'
import './Title.scss'

interface IRowHandler {
  children: React.ReactNode
  className?: string
}

const RowHandler: React.FC<IRowHandler> = ({ children, className }) => {
  return <div className={`row-handler ${className}`}>{children}</div>
}

export default RowHandler
