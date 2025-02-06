function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <a className="block text-teal-600 text-2xl font-bold" href="/">
            <h1>CMC</h1>
          </a>
        </div>
  
        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header