interface DarkLayerProps {
  isSidebarOpen: boolean
}

export default function DarkLayer({ isSidebarOpen }: DarkLayerProps) {
  return <div className={`layer ${isSidebarOpen ? 'dark' : ''}`}></div>
}
