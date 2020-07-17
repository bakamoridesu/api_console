import React from 'react'

export default function Logout() {
  const color = "#0D0D0D"
  return (
    <svg className='icon'>
      <path d="M9,3 h-4 a2.5,2.5 0 0 0 -2,2 v14 a2.5,2.5 0 0 0 2,2 h4"
            fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <polyline points="16,7 21,12 16,17"  stroke={color} strokeLinejoin="round" fill="none" strokeWidth="2" strokeLinecap="round"/>
      <line x1="9" y1="12" x2="20" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}