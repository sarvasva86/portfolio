function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-900">
        Suchita Patel
      </h1>

      <div className="flex gap-6 text-gray-600">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#skills" className="hover:text-black">Skills</a>
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;