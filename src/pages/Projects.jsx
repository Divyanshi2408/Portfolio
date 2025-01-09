import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineWebhook } from "react-icons/md";
import './Projects.css';
import{
  im10,im11,im12,im13,im14,im15,im16,im17,im18,im19,im20,im21,im22,im23,im24,im25,im26,im27,im28,im29,im30,im31,im32,im33,im34,im35
} from "../Assets/images";
const projects = [
  { id: 1, title: "UI Animations", category: "React", image:<img src={im12} alt="NPTEL" />, description: "React UI Animations" },
  { id: 2, title: "Tetris Game", category: "React", image: <img src={im16} alt="NPTEL" />, description: "Vue Tetris Game" },
  { id: 3, title: "Ethereum Project", category: "HTML", image: <img src={im26} alt="NPTEL" />, description: "Vue Ethereum" },
  { id: 4, title: "HTML Form Builder", category: "HTML", image: <img src={im22} alt="NPTEL" />, description: "HTML Form" },
  { id: 5, title: "CSS Animations", category: "HTML", image:<img src={im31} alt="NPTEL" />, description: "CSS Animations" },
  { id: 6, title: "CSS Animations", category: "React", image:<img src={im20} alt="NPTEL" />, description: "CSS Animations" },
  { id: 7, title: "CSS Animations", category: "React", image:<img src={im11} alt="NPTEL" />, description: "CSS Animations" },
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

      {/* Projects Display */}
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
