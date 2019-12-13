import React from 'react'
import { useThemeUI } from 'theme-ui'

export default function Logo() {
  const { theme } = useThemeUI()
  const { primary = '#000' } = theme.colors || {}

  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="65"
        height="65"
        stroke={primary}
        strokeWidth="3"
      />
      <path
        d="m 23 19 v 30 h 22 v -4 h -18 v -9 h 16 v -4 h -16 v -9 h 18 v -4 h -22 "
        fill={primary}
      />
      {/* <path
        d="M32.4 40.952L31.104 42.356V47H22.968V20.288H31.104V33.032L36.756 27.308H46.368L38.232 35.84L47.016 47H37.188L32.4 40.952Z"
        fill={primary}
      /> */}
    </svg>
  )
}