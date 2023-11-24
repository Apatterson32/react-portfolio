import React from 'react';

const Project = ({ title, imageSrc, githubLink }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>GitHub Link: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
      </div>
    </div>
  );
};

export default Project;
