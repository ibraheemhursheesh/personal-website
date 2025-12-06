'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationBarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavigationBar({ isSidebarOpen, setIsSidebarOpen }: NavigationBarProps) {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path

  return (
    <nav className="nagivation-bar">
      <div className={isSidebarOpen ? "navigation-bar-open" : ""}>
        <ul>
          <li>
            <Link
              onClick={() => setIsSidebarOpen(false)}
              href="/projects"
              className={isActive('/projects') ? 'active' : ''}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-folder-open-dot-icon lucide-folder-open-dot"
              >
                <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
                <circle cx="14" cy="15" r="1" />
              </svg>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link 
              onClick={() => setIsSidebarOpen(false)} 
              href="/ui-chunks"
              className={isActive('/ui-chunks') ? 'active' : ''}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-puzzle-icon lucide-puzzle"
              >
                <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
              </svg>
              <span>UI chunks</span>
            </Link>
          </li>
          <li>
            <Link 
              onClick={() => setIsSidebarOpen(false)} 
              href="/contact"
              className={isActive('/contact') ? 'active' : ''}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link 
              onClick={() => setIsSidebarOpen(false)} 
              href="/about"
              className={isActive('/about') ? 'active' : ''}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-info-icon lucide-info"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
