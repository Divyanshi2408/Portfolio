import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import{
  im10,im11,im12,im13,im14,im15,im16,im17,im18,im19,im20,im21,im22,im23,im24,im25,im26,im27,im28,im29,im30,im31,im32,im33,im34,im35
} from "../Assets/images";

const projects = [
  {
    id: 1,
    title: "UI Animations",
    brief: "Explore UI animations with React to enhance user experience.",
    details: "This project demonstrates various interactive UI animations built using React and CSS animations.",
    image: im12,
    snapshots: [
      im13,
      im14,
      im15,
    ],
    technologies: ["React", "CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "UI Animations",
    brief: "Explore UI animations with React to enhance user experience.",
    details: "This project demonstrates various interactive UI animations built using React and CSS animations.",
    image: im16,
    snapshots: [
      im17,
      im18,
    ],
    technologies: ["React", "CSS", "Framer Motion"],
  },
  {
    id: 3,
    title: "UI Animations",
    brief: "Explore UI animations with React to enhance user experience.",
    details: "This project demonstrates various interactive UI animations built using React and CSS animations.",
    image: im26,
    snapshots: [
      im27,
      im28,
      im29,
      im30,
    ],
    technologies: ["React", "CSS", "Framer Motion"],
  },
  {
    id: 4,
    title: "UI Animations",
    brief: "Explore UI animations with React to enhance user experience.",
    details: "This project demonstrates various interactive UI animations built using React and CSS animations.",
    image: im22,
    snapshots: [
      im23,
      im24,
      im25,
    ],
    technologies: ["React", "CSS", "Framer Motion"],
  },
  {
    id: 5,
    title: "UI Animations",
    brief: "Explore UI animations with React to enhance user experience.",
    details: "This project demonstrates various interactive UI animations built using React and CSS animations.",
    image: im31,
    snapshots: [
      im32,
      im33,
      im34,
      im35,
    ],
    technologies: ["React", "CSS", "Framer Motion"],
  },
  {
    id: 6,
    title: "UI Animations",
    brief: "Explore UI animations with React to enhance user experience.",
    details: "This project demonstrates various interactive UI animations built using React and CSS animations.",
    image: im20,
    snapshots: [
      im19,
      im21,
      
    ],
    technologies: ["React", "CSS", "Framer Motion"],
  },
  {
    id: 7,
    title: "UI Animations",
    brief: "Explore UI animations with React to enhance user experience.",
    details: "This project demonstrates various interactive UI animations built using React and CSS animations.",
    image: im11,
    snapshots: [
     
    ],
    technologies: ["React", "CSS", "Framer Motion"],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  return (
    <div className="project-details-page">
      {project ? (
        <>
          <h2>{project.title}</h2>
          <p className="brief">{project.brief}</p>
          <img src={project.image} alt={project.title} className="main-image" />
          <p>{project.details}</p>
{/* Technologies Used */}
<div className="technologies">
            <h3>Technologies Used</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          {/* Snapshots */}
          <div className="snapshots">
            <h3>Snapshots</h3>
            <div className="snapshot-images">
              {project.snapshots.map((snap, index) => (
                <img key={index} src={snap} alt={`Snapshot ${index + 1}`} />
              ))}
            </div>
          </div>

          
        </>
      ) : (
        <p>Project not found!</p>
      )}
    </div>
  );
};

export default ProjectDetails;
