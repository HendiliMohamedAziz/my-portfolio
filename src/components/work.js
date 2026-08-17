import React from 'react';
import "./work.css";

const experiences = [
    {
        company: 'Codway',
        client: 'Client: Vivescia, France',
        role: 'BI / Data Consultant',
        period: 'Jan 2026 – Present',
        color: 'var(--accent-secondary)',
        items: [
            'Designed and optimized Snowflake data models for analytical and business reporting purposes.',
            'Developed ETL/ELT pipelines to automate data ingestion and transformation workflows.',
            'Built advanced Tableau dashboards to support business teams in data-driven decision-making.',
            'Improved query performance and reduced pipeline failure rates.',
            'Collaborated with product and technical teams in an Agile environment.',
        ],
    },
    {
        company: 'Société Générale',
        client: '',
        role: 'IT Business Analyst Intern',
        period: 'May 2025 – Nov 2025',
        color: 'var(--accent-gold)',
        items: [
            'Gathered and analyzed business requirements and translated them into functional specifications.',
            'Collaborated with development teams to deliver solutions aligned with business needs.',
            'Designed automated testing workflows using Playwright and TypeScript.',
            'Participated in Agile ceremonies including sprint reviews and backlog discussions.',
            'Developed Excel VBA macros to automate data processing and optimize reporting in cross-functional projects.',
        ],
    },
    {
        company: 'ARTCOM International',
        client: '',
        role: 'Data Analyst Intern',
        period: 'Jun 2024 – Jul 2024',
        color: 'var(--accent-secondary)',
        items: [
            'Extracted and analyzed business data from Oracle databases.',
            'Designed Power BI dashboards for performance tracking and reporting.',
            'Performed data validation and quality checks to ensure reliable reporting.',
        ],
    },
    {
        company: 'Quantum Solutions',
        client: '',
        role: 'Data Engineer Intern',
        period: 'Jul 2023 – Aug 2023',
        color: 'var(--accent-gold)',
        items: [
            'Designed real-time data pipelines using Apache Spark and Kafka.',
            'Implemented scalable ETL processes for high-volume data processing.',
            'Monitored pipeline performance and improved data processing efficiency.',
        ],
    },
];

const MyWork = () => {
    return (
        <div className="work-container" id='work'>
            <div className="textSection">
                <span className="section-eyebrow">// 04 · EXPERIENCE</span>
                <h1 className="title">Professional Experience</h1>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot" style={{ backgroundColor: exp.color }}></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <h2 className="exp-company" style={{ color: exp.color }}>{exp.company}</h2>
                                        {exp.client && <span className="exp-client">({exp.client})</span>}
                                        <p className="exp-role">{exp.role}</p>
                                    </div>
                                    <span className="exp-period">{exp.period}</span>
                                </div>
                                <ul className="exp-items">
                                    {exp.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyWork;
