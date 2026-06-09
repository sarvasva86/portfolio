function Skills() {
    const skills = [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Flask",
      "REST APIs",
      "JWT Auth",
      "Git",
      "GitHub"
    ];
  
    return (
      <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          Skills
        </h2>
  
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border rounded-full text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;