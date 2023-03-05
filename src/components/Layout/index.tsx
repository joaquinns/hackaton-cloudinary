import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  )
}
