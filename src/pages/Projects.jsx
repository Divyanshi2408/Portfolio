import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineWebhook } from "react-icons/md";
import './Projects.css';
import{
  im11,im12,im16,im20,im22,im26,im31,im36,im40,im44
} from "../Assets/images";
const projects = [
  {
    id: 1,
    title: "Learning Management System (LMS)",
    category: "Node.js",
    image: im40,
    github: "https://github.com/Divyanshi2408/Learning-Management-System",
    description: "A MERN stack-based LMS platform where users can enroll in courses, track progress, and access learning materials.",
  },
  {
    id: 2,
    title: "ThreadSpire – Community Wisdom Threads",
    category: "Node.js",
    image: im36,
    github: "https://github.com/Divyanshi2408/ThreadSpire-Community-Wisdom-Threads",
    description: "A MERN-based community platform where users create, remix, and organize long-form wisdom threads.",
  },
  {
    id: 3,
    title: "Real Estate Web App",
    category: "Node.js",
    image: im44,
    github: "https://github.com/Divyanshi2408/Real-Estate-webApp",
    description: "A full-stack MERN Real Estate application for property listings, user authentication, and real-time search.",
  },
  {
    id: 4,
    title: "Music Player Web App",
    category: "React",
    image: im12,
    github: "https://github.com/Divyanshi2408/music-player",
    description: "I developed a dynamic and interactive music player web application.",
  },
  {
    id: 5,
    title: "Recipe Finder Web App",
    category: "React",
    image: im16,
    github: "https://github.com/Divyanshi2408/recipe-finder",
    description: "I created a Recipe Finder web application using React",
  },
  {
    id: 6,
    title: "Airline Website",
    category: "HTML",
    image: im26,
    github: "https://github.com/Divyanshi2408/ADR-Airline",
    description: "I created a dynamic and user-friendly Airline Website as a frontend-only project",
  },
  {
    id: 7,
    title: "Travel Website",
    category: "HTML",
    image: im22,
    github: "https://github.com/Divyanshi2408/Learning-Management-System",
    description: "I created a Travel Website using HTML, CSS, and JavaScript, aimed at showcasing travel destinations and services.",
  },
  {
    id: 8,
    title: "Flower Website",
    category: "HTML",
    image: im31,
    github: "https://github.com/Divyanshi2408/Flower-Web",
    description: "This Flower Website was developed using HTML, CSS, and JavaScript",
  },
  {
    id: 9,
    title: "Sorting Algorithm Visualizer",
    category: "React",
    image: im20,
    github: "https://github.com/Divyanshi2408/sorting-visualizer-main",
    description: "The Sorting Algorithm Visualizer is a React-based application that visually demonstrates various sorting algorithms in action.",
  },
  {
    id: 10,
    title: "To-Do List App",
    category: "React",
    image: im11,
    github: "https://github.com/Divyanshi2408/Todo-list",
    description: "I developed a To-Do List App using React, designed to help users efficiently manage their daily tasks.",
  },
];


const categories = [
  { label: "All", symbol: <MdOutlineWebhook /> },
  { label: "React", symbol: <FaReact /> },
  { label: "HTML", symbol: <FaHtml5 /> },
  { label: "CSS", symbol: <FaCss3 /> },
  { label: "Javascript", symbol: <IoLogoJavascript /> },
  { label: "Node.js", symbol: <FaNodeJs /> },
];

const Projects = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const handleCheckboxChange = (category) => {
    if (category.label === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) => {
        if (prev.includes(category.label)) {
          return prev.filter((cat) => cat !== category.label);
        } else {
          return prev.filter((cat) => cat !== "All").concat(category.label);
        }
      });
    }
  };

  const filteredProjects =
    selectedCategories.includes("All")
      ? projects
      : projects.filter((project) => selectedCategories.includes(project.category));

  return (
    <div className="projects-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <label>
                <input className='check'
                  type="checkbox"
                  checked={selectedCategories.includes(category.label)}
                  onChange={() => handleCheckboxChange(category)}
                />
                {category.symbol} {category.label}
              </label>
            </li>
          ))}
        </ul>
      </aside>

      <main className="projects-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-details">
                <div className="project-header">
  <h4>{project.title}</h4>
  {project.github && (
    <a
      href={project.github}
      className="github-icon"
      target="_blank"
      rel="noopener noreferrer"
      title="View on GitHub"
    >
      <FaGithub />
    </a>
  )}
</div>

                <p>{project.description}</p>
                
                <button className='btn' onClick={() => navigate(`/project/${project.id}`)}>View Project</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-projects">No projects available for these categories.</p>
        )}
      </main>
    </div>
  );
};

export default Projects;
