interface HeaderProps {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header>
      <div>{children}</div>
    </header>
  )
}
