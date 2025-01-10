import React, { useState } from "react";
import {FaUser,FaStar,FaSchool,FaEnvelope,FaPhone,FaChevronDown,FaChevronRight,FaTimes,} from "react-icons/fa";
import "./AboutPage.css";
import{
  im,im1,im2,im3,im4,im5,im6,im7,im8,im9,im11
} from "../Assets/images";

const sidebarData = [
  {
    label: "Professional Info",
    icon: (
      <img
        src={im}
        alt="Professional Info Icon"
      />
    ),
    subItems: ["Experience", "Skills", "Certificates"],
  },
  {
    label: "Personal Info",
    icon: (
      <img
        src={im1}
        alt="Professional Info Icon"
      />
    ),
    subItems: ["Bio", "Education","Art"],
  },
  {
    label: "Extracurricular Activities",
    icon: (
      <img
        src={im2}
        alt="Professional Info Icon"
      />
    ),
    subItems: ["OpenSource"],
  },
];



// Extended content map with design components
const contentMap = {
  Experience: {
    description: "This is the content for Experience. It contains details about your professional journey.",
    design: () => (
      <div className="experience-section">
        <p><strong>Professional Highlights:</strong></p>
        <ul>
          <li>Worked as a Software Engineer at XYZ Corp.</li>
          <li>Developed scalable web applications.</li>
        </ul>
      </div>
    ),
  },
  Skills: {
  description: "This section highlights your technical and soft skills.",
  design: () => (
    <div className="skills-section">
     
      <div className="skills-categories">
        <div className="skills-category">
          <h4>Technical</h4>
          <div className="skills-icons">
          <div className="skill-items">
            <div className="skill-item">
              <img src="https://img.icons8.com/color/144/000000/javascript--v1.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            </div>
            <div className="skill-items">
            <div className="skill-item">
              <img src="https://img.icons8.com/color/144/000000/react-native.png" alt="React" />
              <span>React</span>
            </div>
            </div>
            <div className="skill-items">
            <div className="skill-item">
              <img src="https://img.icons8.com/fluency/144/000000/node-js.png" alt="SASS" />
              <span>Node.js</span>
            </div>
            </div>
            <div className="skill-items">
            <div className="skill-item">
              <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="jQuery" />
              <span>MongoDB</span>
            </div>
            </div>
            <div className="skill-items">
            <div className="skill-item">
              <img src="https://img.icons8.com/color/144/000000/bootstrap.png" alt="Python" />
              <span>Bootstrap</span>
            </div>
            </div>
            <div className="skill-items">
            <div className="skill-item">
              <img src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default" alt="Bootstrap" />
              <span>Tailwind</span>
            </div>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h4>Tools And Software</h4>
          <div className="skills-icons">
          <div className="skill-items">
            <div className="skill-item">
              <img src="https://img.icons8.com/color/144/000000/git.png" alt="Node.js" />
              <span>Git</span>
            </div>
            </div>
            <div className="skill-items">
            <div className="skill-item">
              <img src="https://img.icons8.com/fluency/144/000000/github.png" alt="Next.js" />
              <span>Github</span>
            </div>
            </div>
            <div className="skill-items">
            <div className="skill-item">
              <img src="https://img.icons8.com/fluency/144/000000/visual-studio-code-2019.png" alt="Tailwind" />
              <span>VSCode</span>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  ),
},

  Certificates: {
    description: "Details about certifications i have earned.",
    design: () => (
      <div className="commonn-section">
        <h3>Open Source Contributions</h3>
        <p>Contributed Projects:</p>
        <div className="commonn-grid">
          <div className="commonn-card">
            <img
              src="https://github.blog/wp-content/uploads/2022/10/hacktoberfestbanner.jpeg?fit=1200%2C630"
              alt="Open Source Project 1"
            />
            <p>React UI Animations</p>
          </div>
          <div className="commonn-card">
            <img
              src="https://via.placeholder.com/300x200?text=Project+2"
              alt="Open Source Project 2"
            />
            <p>Vue Tetris Game</p>
          </div>
          <div className="commonn-card">
            <img
              src="https://via.placeholder.com/300x200?text=Project+3"
              alt="Open Source Project 3"
            />
            <p>Next.js Starter Template</p>
          </div>
          <div className="commonn-card">
            <img
              src="https://via.placeholder.com/300x200?text=Project+4"
              alt="Open Source Project 4"
            />
            <p>Node.js API Boilerplate</p>
          </div>
          <div className="commonn-card">
            <img
              src="https://via.placeholder.com/300x200?text=Project+5"
              alt="Open Source Project 5"
            />
            <p>Python Data Processing Library</p>
          </div>
          <div className="commonn-card">
            <img
              src="https://via.placeholder.com/300x200?text=Project+6"
              alt="Open Source Project 6"
            />
            <p>Flutter E-Commerce App</p>
          </div>
        </div>
      </div>
    ),
  },
  Bio: {
    description: "Your biography goes here, describing who you are.",
    design: () => (
      <div className="bio-section">
        <p>Hi! I am a passionate developer with a love for solving problems and creating meaningful applications.</p>
      </div>
    ),
  },
  Education :{
    description: "Your education timeline details.",
    design: () => (
      <div className="timeline-section">
        <div className="timeline">
          {/* First Education Block */}
         
          <div className="timeline-item left">
          <div className="date r-date">
            <p>2020-2024</p>
          </div>
            <div className="timeline-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvhIRmO4HJufxuC2kmA2VtoTy1zMM4XF75A&s" alt="Graduation Icon" />
            </div>
            <div className="timeline-content">
              <h3>Bachelor of Technology (CSE)</h3>
              <p>Dr. A.P.J. Abdul Kalam Technical University</p>
           
            </div>
          </div>
  
          {/* Second Education Block */}
          
          <div className="timeline-item right">
          <div className="year">
            <p>2019-2020</p>
          </div>
            <div className="timeline-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAoQgncMuqSmAvojEND0m0jy0Hp8qNo0q7PZrqFnK_1w5mnWE-IdtT1UMZY0AFcOh-qY&usqp=CAU" alt="College Icon" />
            </div>
            <div className="timeline-content">
              <h3>Higher Secondary Education</h3>
              <p>Queen Victoria Girls Inter College </p>
              
            </div>
          </div>
  
          {/* Third Education Block */}
         
          <div className="timeline-item left">
          <div className="date r-date">
            <p>2017-2018</p>
          </div>
            <div className="timeline-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAoQgncMuqSmAvojEND0m0jy0Hp8qNo0q7PZrqFnK_1w5mnWE-IdtT1UMZY0AFcOh-qY&usqp=CAU" alt="School Icon" />
            </div>
            <div className="timeline-content">
              <h3>Secondary Education</h3>
              <p>Queen Victoria Girls Inter College</p>
            
            </div>
          </div>
        </div>
      </div>
    ),
  },
  Art: {
    description: "Details about your hiking adventures.",
    design: () => (
      <div className="common-section">
      <h3>Art and craft</h3>
      <p>Favorite Trail: Rocky Mountains</p>
      <div className="common-grid">
        <div className="common-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvHSiU-riaUQaHx4aL5OmVM3DvIyFM0uG2w&sg" alt="Hiking Trail 1" />
          <p>Trail 1</p>
        </div>
        <div className="common-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvHSiU-riaUQaHx4aL5OmVM3DvIyFM0uG2w&s" alt="Hiking Trail 2" />
          <p>Trail 2</p>
        </div>
        <div className="common-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvHSiU-riaUQaHx4aL5OmVM3DvIyFM0uG2w&s" alt="Hiking Trail 3" />
          <p>Trail 3</p>
        </div>
        <div className="common-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvHSiU-riaUQaHx4aL5OmVM3DvIyFM0uG2w&s" alt="Hiking Trail 4" />
          <p>Trail 4</p>
        </div>
        <div className="common-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvHSiU-riaUQaHx4aL5OmVM3DvIyFM0uG2w&sg" alt="Hiking Trail 1" />
          <p>Trail 1</p>
        </div>
        <div className="common-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvHSiU-riaUQaHx4aL5OmVM3DvIyFM0uG2w&s" alt="Hiking Trail 2" />
          <p>Trail 2</p>
        </div>
        <div className="common-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvHSiU-riaUQaHx4aL5OmVM3DvIyFM0uG2w&s" alt="Hiking Trail 3" />
          <p>Trail 3</p>
        </div>
        <div className="common-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvHSiU-riaUQaHx4aL5OmVM3DvIyFM0uG2w&s" alt="Hiking Trail 4" />
          <p>Trail 4</p>
        </div>
      </div>
    </div>
    ),
  },
  
  Music: {
    description: "Share your favorite music genres or instruments you play.",
    design: () => (
      <div className="music-section">
        <h3>Your Favorite Music</h3>
        <p>Genres: Rock, Jazz, Classical</p>
        <p>Instruments: Guitar, Piano</p>
      </div>
    ),
  },
  OpenSource :{
    description: "Highlight your contributions to open-source projects.",
    design: () => (
      <div className="co-section">
        <h3>Open Source Contributions</h3>
        <p>Contributed Projects:</p>
        <div className="co-grid">
          <div className="co-card">
            <img
              src="https://github.blog/wp-content/uploads/2022/10/hacktoberfestbanner.jpeg?fit=1200%2C630"
              alt="Open Source Project 1"
            />
            <p>React UI Animations</p>
          </div>
          <div className="co-card">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1623661215136/jPWcZyekD.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
              alt="Open Source Project 2"
            />
            <p>Vue Tetris Game</p>
          </div>
          <div className="co-card">
            <img
              src="https://assets.devfolio.co/hackathons/c1573e1780a9481e97869fcd6fbb07fa/assets/cover/136.png"
              alt="Open Source Project 3"
            />
            <p>Next.js Starter Template</p>
          </div>
          <div className="co-card">
            <img
              src="https://via.placeholder.com/300x200?text=Project+4"
              alt="Open Source Project 4"
            />
            <p>Node.js API Boilerplate</p>
          </div>
          <div className="co-card">
            <img
              src="https://via.placeholder.com/300x200?text=Project+5"
              alt="Open Source Project 5"
            />
            <p>Python Data Processing Library</p>
          </div>
          <div className="co-card">
            <img
              src="https://via.placeholder.com/300x200?text=Project+6"
              alt="Open Source Project 6"
            />
            <p>Flutter E-Commerce App</p>
          </div>
        </div>
      </div>
    ),
  },

 
};

const AboutPage = () => {
  const [openSections, setOpenSections] = useState({});
  const [activeSubItem, setActiveSubItem] = useState(null);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSubItemClick = (subItem) => {
    setActiveSubItem(subItem);
  };

  const closeActiveSubItem = () => {
    setActiveSubItem(null);
  };

  return (
    <div className="about-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-section">
          {sidebarData.map((item, index) => (
            <li key={index} className="section-item">
              <div className="section-header" onClick={() => toggleSection(index)}>
                {openSections[index] ? <FaChevronDown /> : <FaChevronRight />}
                {item.icon} {item.label}
              </div>
              {openSections[index] && (
                <ul className="sub-items">
                  {item.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="sub-item"
                      onClick={() => handleSubItemClick(subItem)}
                    >
                    <div className="sub">
                     <img
                      src={im3}
                      alt="Professional Info Icon"
                    /> {subItem}
                    </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activeSubItem && (
          <div className="sub-item-name-box">
            <div className="box-header">
              <h3>{activeSubItem}</h3>
              <FaTimes className="close-icon" onClick={closeActiveSubItem} />
            </div>
          </div>
        )}
        <div className="about-section">
          {activeSubItem ? (
            <div>
              
              {contentMap[activeSubItem]?.design ? (
                contentMap[activeSubItem].design()
              ) : (
                <p>{contentMap[activeSubItem]?.description || "Content not available."}</p>
              )}
            </div>
          ) : (
            <div className="hero-section">
  <div className="profile-image">
    <img src={im9} alt="Your Name" />
  </div>
  <div className="intro-text">
    <p>Hello World! My name is <span className="highlight">Divyanshi pal</span></p>
    <h1 className="role-title">Web developer</h1>
    <p className="description">
      lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem
    </p>
  </div>
  <div className="tech-icons">
    <div className="icons"><img src="https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/linkedin-logo-icon-3D.png" alt="Linkedin" />Linkedin</div>
    <div className="icons"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1lQSuN13eDF1ryrt6oJau0y4Ape1BZ0SqAIefnJO4noz4BPJPnR5WFcE0_Lhqp_iu40&usqp=CAU" alt="GitHub" />GitHub</div>
    <div className="icons"><img src="https://w7.pngwing.com/pngs/424/95/png-transparent-twitter-3d-twitter-twitter-logo-3d-twitter-logo-social-media-logo-3d-icon-thumbnail.png" alt="Twitter" />Twitter</div>
    <div className="icons"><img src="https://i.pinimg.com/736x/94/2f/2b/942f2baae65aa6a4b55728041ec8fed5.jpg" alt="Instagram" />Instagram</div>
    <div className="icons"><img src="https://www.dostupnysoftware.cz/92-large_default/discord.jpg" alt="Discord" />Discord</div>
  </div>
</div>

          )}
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
