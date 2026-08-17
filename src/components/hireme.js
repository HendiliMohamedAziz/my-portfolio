import React, { useEffect, useRef, useState } from 'react';
import './hireme.css';

const REASONS = [
  {
    id: 'data',
    command: 'hire --reason=data',
    response:
      "He turns messy spreadsheets into Snowflake models and Tableau dashboards execs actually screenshot into slide decks. That's the real KPI. \u{1F4CA}",
  },
  {
    id: 'automation',
    command: 'hire --reason=automation',
    response:
      "He once wrote a VBA macro purely so he'd never click \"Save As\" 200 times again. Give him a repetitive task and watch it vanish. \u{1F916}",
  },
  {
    id: 'reliability',
    command: 'hire --reason=reliability',
    response:
      "Survived a Soci\u00e9t\u00e9 G\u00e9n\u00e9rale internship, sprint reviews and standups without missing one. Ships things. Shows up on time. Simple as that. \u23F1\uFE0F",
  },
  {
    id: 'fun',
    command: 'hire --reason=fun_fact',
    response:
      "You're currently playing a mini-game he built instead of clicking a boring \"Contact Me\" button. That's basically a live coding sample. \u{1F609}",
  },
];

const HireMe = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [typedResponse, setTypedResponse] = useState('');
  const [cheering, setCheering] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedId) return undefined;
    const reason = REASONS.find((r) => r.id === selectedId);
    if (!reason) return undefined;

    setTypedResponse('');
    let i = 0;
    const full = reason.response;
    const interval = setInterval(() => {
      i += 1;
      setTypedResponse(full.slice(0, i));
      if (i >= full.length) clearInterval(interval);
    }, 18);

    return () => clearInterval(interval);
  }, [selectedId]);

  const handleSelect = (id) => {
    setSelectedId(id);
    setCheering(true);
    setTimeout(() => setCheering(false), 700);
  };

  return (
    <div
      className={`hireme-container ${visible ? 'appear' : ''}`}
      ref={sectionRef}
      id="hireme"
    >
      <span className="section-eyebrow">// 06 &middot; WHY HIRE ME</span>
      <h1 className="title">Interactive Terminal</h1>

      <div className="terminal-window">
        <div className="terminal-bar">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="terminal-title">aziz@portfolio: ~/why-hire-me</span>
        </div>

        <div className="terminal-body">
          <div className="terminal-stage">
            <div className="stage-floor" />
            <div className="guy-wrap">
              <span className={`guy-emoji ${cheering ? 'cheer' : ''}`}>
                {cheering ? '\u{1F57A}' : '\u{1F6B6}'}
              </span>
              <span className="guy-shadow" />
            </div>
          </div>

          <p className="boot-line" style={{ animationDelay: '0.1s' }}>
            &gt; initializing candidate_evaluation.exe
          </p>
          <p className="boot-line" style={{ animationDelay: '0.5s' }}>
            &gt; loading skillset [Snowflake, ETL/ELT, Tableau] ... OK
          </p>
          <p className="boot-line" style={{ animationDelay: '0.9s' }}>
            &gt; loading sense of humor ... OK
          </p>
          <p className="boot-line prompt-line" style={{ animationDelay: '1.4s' }}>
            &gt; <span className="highlight">WHY SHOULD YOU HIRE AZIZ?</span> pick a flag
            below:
          </p>

          <div className="options-grid">
            {REASONS.map((r) => (
              <button
                key={r.id}
                type="button"
                className={`option-btn ${selectedId === r.id ? 'active' : ''}`}
                onClick={() => handleSelect(r.id)}
              >
                $ {r.command}
              </button>
            ))}
          </div>

          {selectedId && (
            <div className="terminal-output">
              <p className="output-line">
                {typedResponse}
                <span className="cursor">&#9608;</span>
              </p>
              <div className="verdict">
                <span className="verdict-tag">VERDICT: HIRE_ME = true &#9989;</span>
                <div className="verdict-actions">
                  <a href="#contact" className="cta-btn">
                    &rarr; Let's talk
                  </a>
                  <button
                    type="button"
                    className="reset-btn"
                    onClick={() => {
                      setSelectedId(null);
                      setTypedResponse('');
                    }}
                  >
                    &#8635; ask again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HireMe;