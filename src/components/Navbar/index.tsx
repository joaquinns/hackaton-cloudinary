export const Navbar = () => {
  return (
    <header className='z-30 h-16 w-full border-1 border-gray-200 border-b'>
      <nav className='z-30 container mx-auto flex items-center justify-between h-full'>
        <a
          href='/'
          className='flex items-center justify-center font-bold text-xl text-blue-500 bg-[#f5deb3] p-2 rounded'
        >
          Image
          <span className='flex items-center justify-center font-bold text-md text-slate-900'>
            Editor
          </span>
        </a>
      </nav>
    </header>
  )
}
