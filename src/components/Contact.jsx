function Contact() {
    return (
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>
  
        <p className="text-gray-600 mb-6">
          I'm open to Software Engineer, Frontend, and Full Stack roles.
        </p>
  
        <div className="flex justify-center gap-4">
          <a
            href="mailto:your-email@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Email Me
          </a>
  
          <a
            href="https://www.linkedin.com/in/suchita-patel-a86293293/?skipRedirect=true"
            className="border px-6 py-3 rounded-lg"
            target="_blank"
          >
            LinkedIn
          </a>
  
          <a
            href="https://github.com/sarvasva86"
            className="border px-6 py-3 rounded-lg"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </section>
    );
  }
  
  export default Contact;