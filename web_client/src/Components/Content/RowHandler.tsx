import React from 'react'
import './Title.scss'

interface IRowHandler {
  children: React.ReactNode
}

const RowHandler: React.FC<IRowHandler> = ({ children }) => {
  return <div className="row-handler">{children}</div>
}

export default RowHandler
