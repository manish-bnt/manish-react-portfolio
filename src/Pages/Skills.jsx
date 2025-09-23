import React from "react";
import "../Pages/Skills.css";
export default function Skills() {
  const skills = [
    { name: "HTML", category: "Languages", percentage: "90%" },
    { name: "CSS", category: "Languages", percentage: "90%" },
    { name: "Javascript", category: "Languages", percentage: "85%" },
    { name: "React", category: "Framework", percentage: "70%" },
    { name: "Vs code", category: "Tools", percentage: "90%" },
    // { name: "Figma", category: "Tools", percentage: "50%" },
  ];

  const language = skills.filter((skill)=> skill.category === 'Languages');
  const framework = skills.filter((skill)=> skill.category === 'Framework');
  const tools = skills.filter((skill)=> skill.category === 'Tools');
  return (
    <section className="skill-sec">
      <div className="skill-title">
        <h1>My Skills</h1>
      </div>
      <div className="language">
        <div className="lang-title">
          <h1>Languages</h1>
        </div>
        {language.map((v, i) => (
          <>
            <p>{v.name}</p>
            <div className="bar">
              <div className="progress-bar" style={{width:v.percentage}}>
                <span>{v.percentage}</span>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="framework">
        <div className="frame-title">
          <h1>Framework</h1>
        </div>
        {framework.map((v, i) => (
          <>
            <p>{v.name}</p>
            <div className="bar">
              <div className="progress-bar" style={{width:v.percentage}}>
                <span>{v.percentage}</span>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="tools">
        <div className="tools-title">
          <h1>Tools</h1>
        </div>
        {tools.map((v, i) => (
          <>
            <p>{v.name}</p>
            <div className="bar">
              <div className="progress-bar" style={{width:v.percentage}}>
                <span>{v.percentage}</span>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
