import React, { useEffect, useRef, useState } from 'react';
import './projects.css';
import ResponsiveCard from './ResponsiveCard';
import MyPortfolio from '../assets/MyPortfolio.png';
import BourLaForme from '../assets/logoo.png';
import TeamThrive from '../assets/TeamThrive.png';

const projectsData = [
  {
    id: 1,
    title: 'My Portfolio',
    description: 'A dynamic and visually striking portfolio crafted with React.js, designed to showcase my skills and projects through interactive and responsive elements.',
    image: MyPortfolio, // Ensure this path is correct
    url: '#home',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'TeamThrive',
    description: 'My team developed sports analytics modules for football staff, using Talend, PostgreSQL, PowerBI, Python, and Angular for data management, and UIs.',
    image: TeamThrive, // Ensure this path is correct
    url: 'https://drive.google.com/file/d/1c9DREC7wAVXd91VCOATStMQPomLm1ZpP/view?usp=sharing',
    category: 'Data Visualization',
  },
  {
    id: 3,
    title: 'BourLaForme',
    description: 'My team and I built an online sports platform with virtual training, coaching, and fitness tracking using Symfony, Codename One, and Java FX.',
    image: BourLaForme, // Ensure this path is correct
    url: 'https://github.com/HendiliMohamedAziz/ProjetPi_Anarchy',
    category: 'Web Development',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projectsData.filter((project) =>
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('appear');
            }, index * 200); // Delay each card by 200ms
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.card');
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, [filteredProjects]); // Re-run the observer when filteredProjects changes

  return (
    <div className="projects-container">
      <div className="projects-filter">
        {['All', 'Web Development', 'Data Visualization'].map((filter) => (
          <button
            key={filter}
            className={filter === activeFilter ? 'active' : ''}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid" ref={gridRef}>
        {filteredProjects.map((project) => (
          <ResponsiveCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
