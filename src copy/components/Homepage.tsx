'use client'

import { useContext, createContext } from 'react'
import HomePageLanding from './HomePageLanding'

// Create a context for dark mode
export const DarkModeContext = createContext<{ isDark: boolean }>({ isDark: false })

export default function Homepage() {
  // We'll get isDark from the parent component through props or context
  // For now, using a default value
  const isDark = false

  return (
    <div className="home-page">
      <HomePageLanding />
      <div className="introduction">
        <h1>I'm Ibrahim Hursheesh</h1>
        <p>I try to make the web a better place to spend your day at..</p>
      </div>
      <div className="home-page-content">
        <h2>Brief Background</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="305"
          height="10"
          viewBox="0 0 305 10"
        >
          <path
            stroke="#fca100"
            d="M 5 7 Q 55 1 100 5 Q 130 8 160 5 Q 180 3 200 5 Q 245 10 270 8 Q 280 7 300 5"
            fill="none"
            strokeWidth="3px"
            strokeLinecap="round"
          ></path>
        </svg>
        <div className="description">
          <p>
            I'm a <strong>frontend developer</strong> with a passion for creating
            beautiful and functional web applications. I specialize in React,
            TypeScript, and modern web technologies.
          </p>
        </div>
      </div>
    </div>
  )
}
