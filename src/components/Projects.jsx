function Projects() {
    const projects = [
      {
        title: "Expense Tracker SaaS",
        description:
          "Full-stack expense tracking app with authentication, dashboard analytics, and MongoDB backend.",
        tech: "React, Node.js, Express, MongoDB",
        link: "https://github.com/sarvasva86/expense-tracker-saas"
      },
      {
        title: "Job Tracker",
        description:
          "Application tracking system to manage job applications and statuses.",
        tech: "React, Node.js",
        link: "https://github.com/sarvasva86/Job-Tracker"
      },
      {
        title: "Capstone Project",
        description:
          "Full-stack bootcamp capstone project with REST APIs and database integration.",
        tech: "JavaScript, Node.js, Express",
        link: "https://github.com/sarvasva86/Capstone-Project"
      }
    ];
  
    return (
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>
  
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>
  
              <p className="text-gray-600 mt-2">
                {project.description}
              </p>
  
              <p className="text-sm text-gray-500 mt-2">
                {project.tech}
              </p>
  
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 font-medium text-blue-600 hover:text-blue-800"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;