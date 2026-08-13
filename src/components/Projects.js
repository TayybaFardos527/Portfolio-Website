import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Task Manager Web App',
      description:
        'A full-featured task management application built with React.js. Features include task creation, editing, deletion, filtering by status, real-time search, and persistent storage using localStorage.',
      technologies: ['React.js', 'JavaScript', 'Bootstrap', 'localStorage API'],
      features: [
        'Add, edit, and delete tasks',
        'Filter by status (All, Pending, Completed)',
        'Real-time search functionality',
        'Progress tracking with visual progress bar',
        'Responsive design for all devices',
        'Data persistence with localStorage'
      ],
      link: 'https://github.com/tayybafardos/task-manager-app',
      image: '📋',
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing my projects and skills. Built with React.js with smooth animations, clean design, and optimized performance.',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      features: [
        'Smooth scrolling navigation',
        'Responsive mobile-first design',
        'Project showcase with descriptions',
        'Skills and experience section',
        'Contact form integration',
        'Modern UI with animations'
      ],
      link: 'https://github.com/tayybafardos/portfolio-website',
      image: '🎨',
    },
    {
      id: 3,
      title: 'Google Connect - Frontend Development',
      description:
        'Worked as a Frontend Developer at Google Connect, building user-friendly website interfaces. Collaborated with designers and backend developers to deliver clean, reusable UI components.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'REST APIs'],
      features: [
        'Responsive web design implementation',
        'REST API integration',
        'Code review and quality assurance',
        'GitHub version control',
        'CI/CD workflow participation',
        'Cross-browser compatibility testing'
      ],
      link: '#',
      image: '🌐',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <span className="project-icon">{project.image}</span>
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
