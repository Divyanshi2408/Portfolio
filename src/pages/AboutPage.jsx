import React, { useState } from "react";
import {FaUser,FaStar,FaSchool,FaEnvelope,FaPhone,FaChevronDown,FaChevronRight,FaTimes,} from "react-icons/fa";
import "./AboutPage.css";
// import im from "../Assets/images/pr.png"
// import im1 from "../Assets/images/pe.png"
// import im2 from "../Assets/images/ho.png"
// import im3 from "../Assets/images/sub.png"
// import im4 from "../Assets/images/NPTEL.jpg"
// import im5 from "../Assets/images/mazure.jpg"
// import im6 from "../Assets/images/Oracle.jpg"
// import im7 from "../Assets/images/Cognizant.jpg"
// import im8 from "../Assets/images/co.jpeg"
// import im9 from "../Assets/images/my.png"
import{
  im,im1,im2,im3,im4,im5,im6,im7,im8,im9
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
    subItems: ["Bio", "Education"],
  },
  {
    label: "Hobbies",
    icon: (
      <img
        src={im2}
        alt="Professional Info Icon"
      />
    ),
    subItems: ["Music", "Books", "Art"],
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
      <div className="common-section"> 
      <h3>Certificates</h3>
      <div class="common-grids">
  <div class="grid-item">
  <img
        src={im4}
        alt="Professional Info Icon"
      />
    <p>IOT</p>
  </div>
  <div class="grid-item">
  <img
        src={im5}
        alt="Professional Info Icon"
      />
    <p>ms-azure 900</p>
  </div>
  <div class="grid-item">
  <img
        src={im6}
        alt="Professional Info Icon"
      />
    <p>Item 3</p>
  </div>
  
 
  </div>
  <div class="common-grids">
  <div class="grid-item">
  <img
        src={im7}
        alt="Professional Info Icon"
      />
    <p>IOT</p>
  </div>
  <div class="grid-item">
  <img
        src={im8}
        alt="Professional Info Icon"
      />
    <p>ms-azure 900</p>
  </div>
  <div class="grid-item">
  <img
        src={im6}
        alt="Professional Info Icon"
      />
    <p>Item 3</p>
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
  Books: {
    description: "Discuss your favorite books or genres.",
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
