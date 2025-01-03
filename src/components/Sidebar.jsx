import React, { useState } from "react";
import {
  FaBars,
  FaUser,
  FaStar,
  FaSchool,
  FaUniversity,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={`sidebar-container ${isExpanded ? "expanded" : ""}`}>
      {/* Sidebar toggle */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Sidebar sections */}
      <ul className="sidebar-sections">
        <li className="sidebar-item" onClick={() => toggleSection("bio")}>
          <FaUser />
          {isExpanded && <span>Bio</span>}
          {expandedSection === "bio" && (
            <ul className="nested-list">
              <li>Personal Info</li>
              <li>Hobbies</li>
            </ul>
          )}
        </li>

        <li className="sidebar-item" onClick={() => toggleSection("interests")}>
          <FaStar />
          {isExpanded && <span>Interests</span>}
          {expandedSection === "interests" && (
            <ul className="nested-list">
              <li>Music</li>
              <li>Sports</li>
            </ul>
          )}
        </li>

        <li className="sidebar-item" onClick={() => toggleSection("education")}>
          <FaSchool />
          {isExpanded && <span>Education</span>}
          {expandedSection === "education" && (
            <ul className="nested-list">
              <li>High School</li>
              <li>University</li>
            </ul>
          )}
        </li>

        <li className="sidebar-item" onClick={() => toggleSection("contacts")}>
          <FaEnvelope />
          {isExpanded && <span>Contacts</span>}
          {expandedSection === "contacts" && (
            <ul className="nested-list">
              <li>Email</li>
              <li>Phone</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
