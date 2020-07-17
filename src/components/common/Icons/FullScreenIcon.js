import React from 'react'

export default function FullScreenIcon() {
  const color = "#0D0D0D"
  return (
    <svg className='icon'>
      <path d="M8,3 h-3 a3,3 0 0 0 -2,2 v3"
            fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M3,16 v3 a2.5,2.5 0 0 0 2,2 h3"
            fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M16,21 h3 a2.5,2.5 0 0 0 2,-2 v-3"
            fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M21,8 v-3 a2.5,2.5 0 0 0 -2,-2 h-3"
            fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}