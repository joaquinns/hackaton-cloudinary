interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <nav>comppa</nav>
      </header>
      <main className='min-h-screen'>{children}</main>
      <footer>zoi un footer</footer>
    </div>
  )
}
