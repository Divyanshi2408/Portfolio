import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails.css';
import {
  im11, im12, im13, im14, im15, im16, im17, im18, im19, im20,
  im21, im22, im23, im24, im25, im26, im27, im28, im29, im30,
  im31, im32, im33, im34, im35,im36,im38,im39,im40,im41,im42,im43,im44,im45,im46
} from "../Assets/images";


const projects = [
    {
    id: 1,
    title: "Learning Management System (LMS)",
    brief: "A MERN stack-based LMS platform where users can enroll in courses, track progress, and access learning materials.",
    details: "Course Listing: Browse and filter courses by category or level. Enrollment & Progress Tracking: Users can enroll, mark lessons as complete, and track their learning journey. Admin Dashboard: Manage courses, users, and analytics. Payment Integration: (Optional) Free or integrated payment feature to purchase courses.",
    image: im40,
    snapshots: [im40, im41, im42,im43],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit","JWT", "CSS"],
  },
  {
    id: 2,
    title: "ThreadSpire – Community Wisdom Threads",
    brief: "A MERN-based community platform where users create, remix, and organize long-form wisdom threads.",
    details: "Create & Organize Threads: Users can write, edit, and group related threads. Social Features: Bookmark, react, remix threads. Follow users and view trending content. Analytics: Thread engagement and activity stats. Collections: Organize threads into custom collections.",
    image: im44,
    snapshots: [im36, im38, im39],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Context API","JWT", "CSS"],
  },
  {
    id: 3,
    title: "Real Estate Web App",
    brief: "A full-stack MERN Real Estate application for property listings, user authentication, and real-time search.",
    details: "Property Listings: Users can explore properties for sale or rent. Search Filters: Narrow down listings by location, price, and property type. Authentication: Login/signup feature with JWT. Dashboard: Users can post, edit, and delete their own property listings.",
    image: im36,
    snapshots: [im44, im45, im46],
    technologies: ["MongoDB", "Express.js", "React", "Node.js","Context API", "JWT", "CSS"],
  },

  {
    id: 4,
    title: "Music Player Web App",
    brief: "I developed a dynamic and interactive music player web application using React.",
    details: "Trending Songs: Displays the latest and most popular songs based on real-time data or pre-defined lists. New Releases: A section dedicated to the newest music tracks, keeping users up-to-date with fresh content. Weekly Top Songs: Showcases the most-played or highest-rated songs of the week. Popular Artists: Allows users to explore top artists and access their music collections.",
    image: im12,
    snapshots: [im13, im14, im15],
    technologies: ["React", "CSS", "LastFm.API", "iTunes API", "YouTube API"],
  },
  {
    id: 5,
    title: "Recipe Finder Web App",
    brief: "I created a Recipe Finder web application using React that provides users with a seamless experience to search and explore various recipes.",
    details: "Search by Category: Users can search for dishes categorized by cuisine, meal type, and other filters for better results. Text Search: A simple and efficient text-based search option to find recipes quickly. Voice Search: Integrated a voice search feature that allows users to find recipes using voice commands for enhanced accessibility and convenience. Responsive Design: Optimized for both desktop and mobile devices, ensuring easy navigation on any screen size.",
    image: im16,
    snapshots: [im17, im18],
    technologies: ["React", "CSS", "React Hooks", "Speech Recognition API"],
  },
  {
    id: 6,
    title: "Airline Website",
    brief: "I created a dynamic and user-friendly Airline Website as a frontend-only project using HTML, CSS, and JavaScript.",
    details: "Flight Page: Allows users to search for flights by entering departure and destination locations and selecting a departure date. It dynamically displays available flight options. Hotel Recommendations Page: Displays a curated list of recommended hotels with details like star ratings and pricing. Weather Information Page: Integrates a weather display for the destination.",
    image: im26,
    snapshots: [im27, im28, im29, im30],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Travel Website",
    brief: "I created a Travel Website using HTML, CSS, and JavaScript, aimed at showcasing travel destinations and services.",
    details: "Home Page: A welcoming introduction with navigation to various sections. Book Now Section: Allows users to explore travel packages and book their preferred trips (UI-only). Packages Page: Displays a variety of travel packages. Gallery Page: Showcases beautiful travel destination images.",
    image: im22,
    snapshots: [im23, im24, im25],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 8,
    title: "Flower Website",
    brief: "This Flower Website was developed using HTML, CSS, and JavaScript. It's a static website that showcases different flower arrangements.",
    details: "Flower Gallery: A display of flower images. About Us Page: Offers a brief introduction to the flower shop. Contact Page: Lists contact info. Review Page: Displays customer reviews.",
    image: im31,
    snapshots: [im32, im33, im34, im35],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Sorting Algorithm Visualizer",
    brief: "This is a React-based application that visually demonstrates various sorting algorithms in action.",
    details: "Supports Bubble Sort, Merge Sort, Quick Sort, and more. Users can adjust array size and speed. Step-by-step animation of sorting process.",
    image: im20,
    snapshots: [im19, im21],
    technologies: ["React", "CSS"],
  },
  {
    id: 10,
    title: "To-Do List App",
    brief: "A React To-Do List App to help users manage daily tasks efficiently.",
    details: "Add, edit, delete tasks. Mark as complete/pending. Organize day-wise. Persistent using local storage.",
    image: im11,
    snapshots: [],
    technologies: ["React", "CSS", "Local Storage"],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <main className="project-details-page not-found">
        <h2>Project not found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className="project-details-page">
      <article>
        <h2>{project.title}</h2>
        <p className="brief">{project.brief}</p>

        <img
          src={project.image}
          alt={`${project.title} main screenshot`}
          className="main-image"
        />

        <section className="details">
          <p>{project.details}</p>
        </section>

        <section className="technologies">
          <h3>Technologies Used</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>

        {project.snapshots.length > 0 && (
          <section className="snapshots">
            <h3>Snapshots</h3>
            <div className="snapshot-images">
              {project.snapshots.map((snap, index) => (
                <img
                  key={index}
                  src={snap}
                  alt={`${project.title} snapshot ${index + 1}`}
                  className="snapshot"
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
};

export default ProjectDetails;
