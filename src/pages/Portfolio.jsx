import React from 'react';
import Project from '../components/Project';
import '../assets/styles/portfolio.css'

const projects = [
  {
    imageSrc: './src/assets/images/parksplanner.png',
    githubLink: 'https://github.com/Apatterson32/ParksPlanner',
  },

  {
    imageSrc: './src/assets/images/mindmapper.png',
    githubLink: 'https://github.com/Apatterson32/Mind-Mapper',
  },

  {
    imageSrc: './src/assets/images/weatherforecast.png',
    githubLink: 'https://github.com/Apatterson32/butterfly-wings',
  },

  {
    imageSrc: './src/assets/images/dayplanner.png',
    githubLink: 'https://github.com/Apatterson32/human-time-planner',
  },

  {
    imageSrc: './src/assets/images/intellistock.png',
    githubLink: 'https://github.com/akidd15/IntelliStock',
  },

  {
    imageSrc: './src/assets/images/codingquiz.png',
    githubLink: 'https://github.com/Apatterson32/timed-coding-quiz',
  },
];

const Portfolio = () => {
  return (
    <div>
      <section className="main-content">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
