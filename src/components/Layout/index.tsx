import { Navbar } from '../Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <footer className='bg-zinc-900 px-4 py-8 flex justify-center items-center text-slate-100 font-bold'>
        zoi un footer
      </footer>
    </div>
  )
}
