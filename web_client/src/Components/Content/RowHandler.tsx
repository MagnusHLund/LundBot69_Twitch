import React from 'react'
import './Title.scss'

interface TitleProps {
  children: React.ReactNode
}

const RowHandler: React.FC<TitleProps> = ({ children }) => {
  return <div className="row-handler">{children}</div>
}

export default RowHandler
