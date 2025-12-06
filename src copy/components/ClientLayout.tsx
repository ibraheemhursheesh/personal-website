'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import Logo from './Logo'
import NavigationBar from './NavigationBar'
import HeaderActions from './HeaderActions'
import DarkLayer from './DarkLayer'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isDark, setIsDark] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = (e: UIEvent) => {
      const target = e.target as Window
      if (target.innerWidth > 800) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [pathname])

  const handleLayoutClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const eventTarget = e.target as HTMLElement
    if (
      !eventTarget.closest('.navigation-bar-open') &&
      !eventTarget.closest('.sidebar-menu') &&
      !eventTarget.closest('.mode-icon')
    ) {
      setIsSidebarOpen(false)
    }
  }

  return (
    <div
      className={`layout ${isDark ? 'dark-mode' : ''}`}
      onClick={handleLayoutClick}
    >
      <div>
        <DarkLayer isSidebarOpen={isSidebarOpen} />
        <Header>
          <Logo />
          <NavigationBar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <HeaderActions
            isDark={isDark}
            onClick={() => setIsDark((isDark) => !isDark)}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </Header>
        <main>
          <div data-dark={isDark}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
      <div></div>
    </div>
  )
}
