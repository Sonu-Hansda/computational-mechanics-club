function Header() {
  return (
<header style={{ backgroundColor: '#015958' }} className="border-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <a className="block text-white text-2xl font-bold dispaly:content-inline" href="/">
            <h1>CMDC</h1>
          </a> 
        </div>
  
        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
             <li>
  <a className="text-white transition hover:text-black" href="#"> About Us </a>
</li>

<li>
  <a className="text-white transition hover:text-black" href="#">Members</a>
</li>

<li>
  <a className="text-white transition hover:text-black" href="#"> Projects </a>
</li>

<li>
  <a className="text-white transition hover:text-black" href="#"> Blog </a>
</li>

<li>
  <a className="text-white transition hover:text-black" href="#"> Contact Us </a>
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