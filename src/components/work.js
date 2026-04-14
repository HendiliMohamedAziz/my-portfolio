import React from 'react';
import "./work.css";

const experiences = [
    {
        company: 'Codway',
        client: 'Client : Vivescia, France',
        role: 'Consultant BI / Data',
        period: 'Jan 2026 – Présent',
        color: '#0e6e55',
        items: [
            'Conception et optimisation de modèles de données Snowflake à des fins analytiques et de reporting métier.',
            'Développement de pipelines ETL/ELT pour automatiser l\'ingestion et la transformation des données.',
            'Création de tableaux de bord Tableau avancés pour appuyer la prise de décision des équipes métiers.',
            'Amélioration des performances des requêtes et réduction des échecs de pipelines.',
            'Collaboration avec les équipes produit et technique dans un environnement Agile.',
        ],
    },
    {
        company: 'Société Générale',
        client: '',
        role: 'Stagiaire Business Analyst IT',
        period: 'Mai 2025 – Nov 2025',
        color: '#a16f0b',
        items: [
            'Collecté et analysé les besoins métiers et les ai traduits en spécifications fonctionnelles.',
            'Collaboré avec les équipes de développement pour livrer des solutions alignées avec les besoins métiers.',
            'Conçu des workflows de tests automatisés avec Playwright et TypeScript.',
            'Participé aux cérémonies Agile incluant les revues de sprint et les discussions sur le backlog.',
            'Développé des macros Excel VBA pour l\'automatisation de traitements de données et l\'optimisation de reportings.',
        ],
    },
    {
        company: 'ARTCOM International',
        client: '',
        role: 'Stagiaire Data Analyst',
        period: 'Juin 2024 – Juil 2024',
        color: '#0e6e55',
        items: [
            'Extrait et analysé les données métiers depuis des bases de données Oracle.',
            'Conçu des tableaux de bord Power BI pour le suivi des performances et le reporting.',
            'Effectué des contrôles de validation et de qualité des données pour garantir un reporting fiable.',
        ],
    },
    {
        company: 'Quantum Solutions',
        client: '',
        role: 'Stagiaire Data Engineer',
        period: 'Juil 2023 – Août 2023',
        color: '#a16f0b',
        items: [
            'Conçu des pipelines de données en temps réel avec Apache Spark et Kafka.',
            'Implémenté des processus ETL scalables pour le traitement de grands volumes de données.',
            'Surveillé les performances des pipelines et amélioré l\'efficacité du traitement des données.',
        ],
    },
];

const MyWork = () => {
    return (
        <div className="work-container" id='work'>
            <div className="textSection">
                <h1 className="title">Expérience Professionnelle</h1>
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
