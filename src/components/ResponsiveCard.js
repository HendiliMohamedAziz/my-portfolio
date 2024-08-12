import React from 'react';
import './ResponsiveCard.css';

const ResponsiveCard = ({ project }) => {
  return (
    <a
      className="card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className="card-content">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-body">{project.description}</p>
        <span className="button">Show Project</span>
      </div>
    </a>
  );
};

export default ResponsiveCard;
