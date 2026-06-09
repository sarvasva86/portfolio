function Projects() {
  const projects = [
    {
      title: "Expense Tracker SaaS",
      description:
        "Full-stack application for tracking expenses with authentication, analytics dashboard, and MongoDB database.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/sarvasva86/expense-tracker-saas"
    },
    {
      title: "Job Tracker",
      description:
        "Application to manage job applications with tracking status, notes, and organization features.",
      tech: ["React", "Node.js"],
      github: "https://github.com/sarvasva86/Job-Tracker"
    },
    {
      title: "Capstone Project",
      description:
        "Full-stack application built during bootcamp demonstrating REST APIs and database integration.",
      tech: ["JavaScript", "Express", "Node.js"],
      github: "https://github.com/sarvasva86/Capstone-Project"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {p.title}
            </h3>

            <p className="text-gray-600 mb-3">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              View Code →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;