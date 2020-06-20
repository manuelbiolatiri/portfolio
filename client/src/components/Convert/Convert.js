import React from 'react'

export default function Convert(props) {
  const {
    
    onChangeAmount
    
  } = props
  return (
    <div>
      <input type="number" className="input"  onChange={onChangeAmount} />
      
    </div>
  )
}