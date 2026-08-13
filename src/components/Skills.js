import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Vue.js', 'Angular (basics)'],
    },
    {
      category: 'Styling & Frameworks',
      skills: ['Bootstrap', 'Responsive Design', 'Flexbox', 'CSS Grid', 'Tailwind CSS'],
    },
    {
      category: 'Tools & Workflow',
      skills: ['Git/GitHub', 'VS Code', 'REST APIs', 'JSON', 'CI/CD basics', 'npm/yarn'],
    },
    {
      category: 'Soft Skills',
      skills: ['Team Collaboration', 'Problem Solving', 'Communication', 'Attention to Detail', 'Agile Methodology'],
    },
    {
      category: 'Languages',
      skills: ['English (Fluent)', 'Urdu (Native)'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-dot">●</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3>Proficiency Levels</h3>
          <div className="proficiency-grid">
            <div className="proficiency-item">
              <h4>Expert</h4>
              <p>React.js, JavaScript, HTML5, CSS3, Bootstrap</p>
            </div>
            <div className="proficiency-item">
              <h4>Intermediate</h4>
              <p>Vue.js, REST APIs, Git, Responsive Design</p>
            </div>
            <div className="proficiency-item">
              <h4>Beginner</h4>
              <p>Angular, CI/CD, Backend Integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
