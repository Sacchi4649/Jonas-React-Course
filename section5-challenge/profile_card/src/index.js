import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML",
    level: "intermediate",
    color: "#e34c26",
  },
  {
    skill: "CSS",
    level: "intermediate",
    color: "#264de4",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#f0db4f",
  },
  {
    skill: "NodeJs",
    level: "intermediate",
    color: "#6ba063",
  },
  {
    skill: "ExpressJs",
    level: "intermediate",
    color: "#808080",
  },
  {
    skill: "MongoDB",
    level: "intermediate",
    color: "#3fa307",
  },
  {
    skill: "Google App Engine",
    level: "beginner",
    color: "#4285f4",
  },
  {
    skill: "Google Cloud Run",
    level: "beginner",
    color: "#4285f4",
  },
];

const App = () => {
  return (
    <div className="card">
      <Avatar photo="profile.jpg" />
      <div className="data">
        <Intro />
        <div className="skill-list">
          <SkillList />
        </div>
      </div>
    </div>
  );
};

const Avatar = (props) => {
  return <img src={props.photo} alt="Sany's profile pict" className="avatar" />;
};

const Intro = () => {
  return (
    <div>
      <h1>Sany Adika Prayata</h1>
      <p>
        Things I am into are solving problems, exploring, and learning
        technology. I am interested in Web Development and Cloud Computing. I
        have few experiences in using NodeJS to create API with ExpressJs
        framework, deployment by App Engine and Cloud Run on Google Cloud
        Platform, and using database with Mongo and MariaDB. I am always willing
        to learn new things and flexible enough to adapt and able to work
        whether as a team or individually.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
};

const Skill = ({ skill, color, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "🦾"}
      </span>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
