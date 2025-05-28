import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
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
    category: "MERN",
    image: <img src={im40} alt="LMS" />,
    description: "A MERN stack-based LMS platform where users can enroll in courses, track progress, and access learning materials.",
  },
  {
    id: 2,
    title: "ThreadSpire – Community Wisdom Threads",
    category: "MERN",
    image: <img src={im36} alt="ThreadSpire" />,
    description: "A MERN-based community platform where users create, remix, and organize long-form wisdom threads.",
  },
  {
    id: 3,
    title: "Real Estate Web App",
    category: "MERN",
    image: <img src={im44} alt="Real Estate" />,
    description: "A full-stack MERN Real Estate application for property listings, user authentication, and real-time search.",
  },
  {
    id: 4,
    title: "Music Player Web App",
    category: "React",
    image: <img src={im12} alt="Music" />,
    description: "I developed a dynamic and interactive music player web application.",
  },
  {
    id: 5,
    title: "Recipe Finder Web App",
    category: "React",
    image: <img src={im16} alt="recipe" />,
    description: "I created a Recipe Finder web application using React",
  },
  {
    id: 6,
    title: "Airline Website",
    category: "HTML",
    image: <img src={im26} alt="airline" />,
    description: "I created a dynamic and user-friendly Airline Website as a frontend-only project",
  },
  {
    id: 7,
    title: "Travel Website",
    category: "HTML",
    image: <img src={im22} alt="travel" />,
    description: "I created a Travel Website using HTML, CSS, and JavaScript, aimed at showcasing travel destinations and services.",
  },
  {
    id: 8,
    title: "Flower Website",
    category: "HTML",
    image: <img src={im31} alt="flower" />,
    description: "This Flower Website was developed using HTML, CSS, and JavaScript",
  },
  {
    id: 9,
    title: "Sorting Algorithm Visualizer",
    category: "React",
    image: <img src={im20} alt="sorting" />,
    description: "The Sorting Algorithm Visualizer is a React-based application that visually demonstrates various sorting algorithms in action.",
  },
  {
    id: 10,
    title: "To-Do List App",
    category: "React",
    image: <img src={im11} alt="todo" />,
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
            {project.image}
              <div className="project-details">
                <h4>{project.title}</h4>
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
