import React from 'react'

export default function Smile() {
  const color = "#CF2C00"
  return (
      <svg width={22} height={22}>
        <circle cx="11" cy="11" r="10" stroke={color} strokeWidth="2" fillOpacity="0"/>
        <circle cx="8" cy="8" r="0.5" stroke={color} strokeWidth="1" fillOpacity="0"/>
        <circle cx="14" cy="8" r="0.5" stroke={color} strokeWidth="1" fillOpacity="0"/>
        <line x1="7" y1="14" x2="15" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
  )
}