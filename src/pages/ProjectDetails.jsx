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
    image:  <img
            src={im11}
            alt="Professional Info Icon"
          />,
    snapshots: [
      "https://via.placeholder.com/600x400?text=Snapshot+1",
      "https://via.placeholder.com/600x400?text=Snapshot+2",
    ],
    technologies: ["React", "CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "UI Animations",
    brief: "Explore UI animations with React to enhance user experience.",
    details: "This project demonstrates various interactive UI animations built using React and CSS animations.",
    image:  <img
            src={im10}
            alt="Professional Info Icon"
          />,
    snapshots: [
      "https://via.placeholder.com/600x400?text=Snapshot+1",
      "https://via.placeholder.com/600x400?text=Snapshot+2",
    ],
    technologies: ["React", "CSS", "Framer Motion"],
  },
  {
    id: 3,
    title: "UI Animations",
    brief: "Explore UI animations with React to enhance user experience.",
    details: "This project demonstrates various interactive UI animations built using React and CSS animations.",
    image: "https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/01/blog-4-1.jpg",
    snapshots: [
      "https://via.placeholder.com/600x400?text=Snapshot+1",
      "https://via.placeholder.com/600x400?text=Snapshot+2",
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

          {/* Snapshots */}
          <div className="snapshots">
            <h3>Snapshots</h3>
            <div className="snapshot-images">
              {project.snapshots.map((snap, index) => (
                <img key={index} src={snap} alt={`Snapshot ${index + 1}`} />
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="technologies">
            <h3>Technologies Used</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Project not found!</p>
      )}
    </div>
  );
};

export default ProjectDetails;
