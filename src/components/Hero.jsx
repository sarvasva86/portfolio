function Hero() {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4">
          Full Stack Software Engineer
        </h1>
  
        <p className="text-xl mb-4 text-gray-600">
  React • Node.js • Express • MongoDB • PostgreSQL
</p>
  
       
        <p className="max-w-2xl text-gray-600 mb-8">
  Full Stack Software Engineer focused on building production-ready web applications.
  Recently transitioned from Clinical Laboratory Science into software engineering,
  with hands-on experience in full-stack development, APIs, and authentication systems.
</p>
       
  
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            View Projects
          </a>
  
          <a
            href="https://github.com/"
            className="border px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

          <a
  href="/resume.pdf"
  download
  className="border px-6 py-3 rounded-lg hover:bg-gray-100"
>
  Download Resume
</a>
        </div>
      </section>
    );
  }
  
  export default Hero;