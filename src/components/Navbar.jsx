function Navbar() {
    return (
      <nav className="flex justify-between items-center px-8 py-5 shadow-sm sticky top-0 bg-white z-50">
        <h1 className="text-xl font-bold">
          Suchita Patel
        </h1>
  
        <div className="flex gap-6 text-gray-700">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#skills" className="hover:text-black">Skills</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;