import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import{
  im11,im12,im13,im14,im15,im16,im17,im18,im19,im20,im21,im22,im23,im24,im25,im26,im27,im28,im29,im30,im31,im32,im33,im34,im35
} from "../Assets/images";

const projects = [
  {
    id: 1,
    title: "Music Player Web App",
    brief: "I developed a dynamic and interactive music player web application using React.",
    details: "Trending Songs: Displays the latest and most popular songs based on real-time data or pre-defined lists. New Releases: A section dedicated to the newest music tracks, keeping users up-to-date with fresh content. Weekly Top Songs: Showcases the most-played or highest-rated songs of the week. Popular Artists: Allows users to explore top artists and access their music collections.",
    image: im12,
    snapshots: [
      im13,
      im14,
      im15,
    ],
    technologies: ["React", "CSS", "LastFm.API"," iTunes API","YouTube API"],
  },
  {
    id: 2,
    title: " Recipe Finder Web App",
    brief: "I created a Recipe Finder web application using React that provides users with a seamless experience to search and explore various recipes. Key features include:",
    details: "Search by Category: Users can search for dishes categorized by cuisine, meal type, and other filters for better results.Text Search: A simple and efficient text-based search option to find recipes quickly.Voice Search: Integrated a voice search feature that allows users to find recipes using voice commands for enhanced accessibility and convenience.Responsive Design: Optimized for both desktop and mobile devices, ensuring easy navigation on any screen size.",
    image: im16,
    snapshots: [
      im17,
      im18,
    ],
    technologies: ["React", "CSS", "React Hooks","Speech Recognition API"],
  },
  {
    id: 3,
    title: "Airline Website",
    brief: "I created a dynamic and user-friendly Airline Website as a frontend-only project using HTML, CSS, and JavaScript. The website includes several key features to enhance the user experience:",
    details: "Flight Page: Allows users to search for flights by entering departure and destination locations and selecting a departure date. It dynamically displays available flight options based on the user's input.Hotel Recommendations Page: Displays a curated list of recommended hotels with details like star ratings and pricing. This page provides users with a quick overview of possible accommodations.Weather Information Page: Integrates a weather display for the destination, providing users with up-to-date weather information for their travel plans.",
    image: im26,
    snapshots: [
      im27,
      im28,
      im29,
      im30,
    ],
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 4,
    title: "Travel Website ",
    brief: "I created a Travel Website using HTML, CSS, and JavaScript, aimed at showcasing travel destinations and services. This website provides an informative and engaging user experience, focusing on presenting various travel packages and destinations.",
    details: "Home Page: A welcoming introduction with navigation to various sections.Book Now Section: Allows users to explore travel packages and book their preferred trips (UI-only, non-functional).Packages Page: Displays a variety of travel packages, detailing destinations and features (non-interactive).Gallery Page: Showcases beautiful travel destination images (static gallery with no interactivity).",
    image: im22,
    snapshots: [
      im23,
      im24,
      im25,
    ],
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 5,
    title: "Flower Website",
    brief: "This Flower Website was developed using HTML, CSS, and JavaScript. It's a static website that presents a visually appealing layout for a flower business, showcasing different flower arrangements and providing relevant business information.",
    details: "Flower Gallery: A display of flower images, providing users with a visual catalog of flower arrangements.About Us Page: Offers a brief introduction to the flower shop, including the brand’s story and mission.Contact Page: Lists contact information for inquiries (static layout).Review Page: Displays customer reviews and testimonials about the flower shop’s services.",
    image: im31,
    snapshots: [
      im32,
      im33,
      im34,
      im35,
    ],
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 6,
    title: "Sorting Algorithm Visualizer",
    brief: "EThe Sorting Algorithm Visualizer is a React-based application that visually demonstrates various sorting algorithms in action. It helps users understand how sorting algorithms work by providing an interactive, step-by-step visual representation of different sorting techniques.",
    details: "Visualization of Sorting Algorithms: The app visually displays the process of sorting data using popular algorithms such as Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, and more.Real-Time Interaction: Users can adjust the array size and sorting speed to see how the algorithms behave under different conditions.Step-by-Step Execution: The app shows each step of the sorting process, making it easier for users to understand the internal logic of each algorithm.Built with React: The app leverages React's state management to efficiently update and render the sorting steps in real time.",
    image: im20,
    snapshots: [
      im19,
      im21,
      
    ],
    technologies: ["React", "CSS"],
  },
  {
    id: 7,
    title: "To-Do List App ",
    brief: "I developed a To-Do List App using React, designed to help users efficiently manage their daily tasks. This app provides an intuitive interface with various features to enhance task management and organization.",
    details: "Add, Update, and Delete Tasks: Users can add new tasks, modify existing ones, or delete tasks that are no longer needed.Mark Tasks as Complete or Pending: Tasks can be marked as complete or pending, allowing users to track their progress.Organize Tasks Day-Wise: Tasks are organized by days, providing a clear overview of what needs to be done on each day.Persist Data Using Local Storage: Data is saved to the browser’s local storage, ensuring that tasks remain accessible even after the page is refreshed.",
    image: im11,
    snapshots: [
     
    ],
    technologies: ["React", "CSS", "Local Storage"],
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
