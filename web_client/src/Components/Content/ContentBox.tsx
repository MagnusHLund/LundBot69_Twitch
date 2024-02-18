import React from 'react'
import './ContentBox.scss'

interface ContentBoxProps {
  children?: React.ReactNode
  minWidth?: string
  minHeight?: string
  className?: string
  border?: string
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  minWidth = '400px',
  minHeight = '300px',
  className = '',
  border = '1px 1px 1px 1px solid black',
}) => {
  const [
    borderWidthTop,
    borderWidthRight,
    borderWidthBottom,
    borderWidthLeft,
    borderStyle,
    borderColor,
  ] = border.split(' ')

  return (
    <div
      className={`content-box ${className}`}
      style={{
        minHeight: minHeight,
        minWidth: minWidth,
        borderTopWidth: borderWidthTop,
        borderRightWidth: borderWidthRight,
        borderBottomWidth: borderWidthBottom,
        borderLeftWidth: borderWidthLeft,
        borderStyle: borderStyle,
        borderColor: borderColor,
      }}
    >
      <div className="content-box__children">{children}</div>
    </div>
  )
}

export default ContentBox
