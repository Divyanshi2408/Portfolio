import React, { useState } from "react";
import {FaChevronDown,FaChevronRight,FaTimes,} from "react-icons/fa";
import "./AboutPage.css";
import{
  im,im1,im2,im3,im4,im5,im6,im7,im8,im9
} from "../Assets/images";

const sidebarData = [
  {
    label: "Professional Info",
    icon: <img src={im} alt="Professional Info Icon" className="sidebar-icon" />,
    subItems: ["Experience", "Skills", "Certificates"],
  },
  {
    label: "Personal Info",
    icon: <img src={im1} alt="Professional Info Icon" className="sidebar-icon" />,
    subItems: ["Bio", "Education"],
  },
  {
    label: "Extracurricular Activities",
    icon: <img src={im2} alt="Professional Info Icon" className="sidebar-icon" />,
    subItems: ["OpenSource"],
  },
];

const contentMap = {
  Experience: {
    description: "This is the content for Experience. It contains details about your professional journey.",
    design: () => (
      <div className="experience-section">
        <p><strong>Software Engineer Intern</strong><br />
          <strong>Aerial Delivery Research and Development Establishment (ADRDE)</strong><br />
          <em>June 2023 - August 2023</em></p>
        <p>
          As a Software Engineer Intern at ADRDE, I engineered and optimized Android-based applications to improve the operational efficiency of field teams. I utilized Android development tools such as Android Studio and Java to develop and maintain high-performance mobile applications. My role also involved conducting unit testing, debugging, and performance optimization to ensure the app's stability and user satisfaction. Additionally, I contributed to system design documentation, ensuring a clear understanding of the app's architecture and functionality, which provided a foundation for future improvements.
        </p>
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
              {[{
                src: "https://img.icons8.com/color/144/000000/javascript--v1.png",
                name: "JavaScript"
              }, {
                src: "https://img.icons8.com/color/144/000000/react-native.png",
                name: "React"
              }, {
                src: "https://img.icons8.com/fluency/144/000000/node-js.png",
                name: "Node.js"
              }, {
                src: "https://img.icons8.com/color/48/000000/mongodb.png",
                name: "MongoDB"
              }, {
                src: "https://img.icons8.com/color/144/000000/bootstrap.png",
                name: "Bootstrap"
              }, {
                src: "https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default",
                name: "Tailwind"
              }].map(skill => (
                <div className="skill-items" key={skill.name}>
                  <div className="skill-item">
                    <img src={skill.src} alt={skill.name} className="skill-icon" />
                    <span>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h4>Tools And Software</h4>
            <div className="skills-icons">
              {[{
                src: "https://img.icons8.com/color/144/000000/git.png",
                name: "Git"
              }, {
                src: "https://img.icons8.com/fluency/144/000000/github.png",
                name: "Github"
              }, {
                src: "https://img.icons8.com/fluency/144/000000/visual-studio-code-2019.png",
                name: "VSCode"
              }].map(tool => (
                <div className="skill-items" key={tool.name}>
                  <div className="skill-item">
                    <img src={tool.src} alt={tool.name} className="skill-icon" />
                    <span>{tool.name}</span>
                  </div>
                </div>
              ))}
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
        <p>I have earned certifications in various technologies to enhance my skills and stay updated with industry trends.</p>
        <div className="commonn-grid">
          {[{ src: im4, label: "NPTEL" }, { src: im5, label: "MICROSOFT AZURE" }, { src: im6, label: "ORACLE" }, { src: im7, label: "CONGNIZANT" }, { src: im8, label: "COURSERA" }].map((cert, idx) => (
            <div className="commonn-card" key={idx}>
              <img src={cert.src} alt={cert.label} className="certificate-icon" />
              <p>{cert.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  Bio: {
    description: "Your biography goes here, describing who you are.",
    design: () => (
      <div className="bio-section">
        <p>Hi, I am Divyanshi Pal 👋</p>
        <p>I am a Computer Science Engineering graduate 👩‍🎓 with a passion for building innovative and impactful software solutions. Currently, I am preparing to become a full-stack developer, focusing on mastering both frontend and backend technologies to create end-to-end web applications.</p>
        <p>With a strong foundation in computer science and programming, I have honed my skills in frontend development using HTML, CSS, JavaScript, and React. I enjoy designing intuitive and user-friendly interfaces that provide seamless experiences. My current journey includes delving deeper into React, exploring hooks, state management, and routing to build dynamic and responsive web applications.</p>
        <p>As I progress in my full-stack development journey, I am excited to expand my knowledge of backend technologies and integrate them with my frontend expertise. I am driven by a passion for learning and a commitment to developing solutions that make a difference in people's lives.</p>
      </div>
    ),
  },
  Education: {
    description: "Your education timeline details.",
    design: () => (
      <div className="timeline-section">
        <div className="timeline">
          {[{
            date: "2020-2024",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvhIRmO4HJufxuC2kmA2VtoTy1zMM4XF75A&s",
            title: "Bachelor of Technology [8.5 CGP] (CSE)",
            subtitle: "Dr. A.P.J. Abdul Kalam Technical University",
            side: "left"
          }, {
            date: "2019-2020",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAoQgncMuqSmAvojEND0m0jy0Hp8qNo0q7PZrqFnK_1w5mnWE-IdtT1UMZY0AFcOh-qY&usqp=CAU",
            title: "Higher Secondary Education [76%] (PCM)",
            subtitle: "Queen Victoria Girls Inter College, Agra",
            side: "right"
          }, {
            date: "2017-2018",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAoQgncMuqSmAvojEND0m0jy0Hp8qNo0q7PZrqFnK_1w5mnWE-IdtT1UMZY0AFcOh-qY&usqp=CAU",
            title: "Secondary Education [89%] (Science)",
            subtitle: "Queen Victoria Girls Inter College, Agra  ",
            side: "left"
          }].map((edu, idx) => (
            <div className={`timeline-item ${edu.side}`} key={idx}>
              <div className={edu.side === "right" ? "year" : "date r-date"}><p>{edu.date}</p></div>
              <div className="timeline-icon">
                <img src={edu.icon} alt={`${edu.title} Icon`} className="timeline-icon-img" />
              </div>
              <div className="timeline-content">
                <h3>{edu.title}</h3>
                <p>{edu.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  OpenSource: {
    description: "Highlight your contributions to open-source projects.",
    design: () => (
      <div className="co-section">
        <p>I am passionate about contributing to open-source, collaborating with global developers to enhance software and solve real-world problems. Through programs like GSSoC, Social Summer of Code, and Hacktoberfest, I’ve refined my technical skills and contributed to impactful projects.</p>
        <div className="co-grid">
          {[{
            src: "https://github.blog/wp-content/uploads/2022/10/hacktoberfestbanner.jpeg?fit=1200%2C630",
            text: "Actively participated in Hacktoberfest, where I made multiple contributions to various open-source projects. I worked on tasks such as resolving issues, improving documentation, and helping with feature enhancements. This initiative not only improved my coding skills but also deepened my understanding of collaboration in the open-source community."
          }, {
            src: "https://assets.devfolio.co/hackathons/c1573e1780a9481e97869fcd6fbb07fa/assets/cover/136.png",
            text: "Contributed to Social Summer of Code, which allowed me to work on projects designed to make a positive impact on society. I helped inenhancing functionality and improving the user experience of open-source social projects by contributing code fixes and testing new features. My involvement in the program gave me exposure to best practices in open-source development and teamwork."
          }, {
            src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1623661215136/jPWcZyekD.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            text: "Participated in GirlScript Summer of Code, a program aimed at encouraging women to engage in open-source development. During the program, I contributed to multiple open-source projects by identifying bugs, improving documentation, and collaborating with a global team of developers. This experience helped me improve my problem-solving skills and gain hands-on experience with version control systems like Git."
          }].map((item, idx) => (
            <div className="co-card" key={idx}>
              <img src={item.src} alt={`Open Source Project ${idx + 1}`} className="open-source-icon" />
              <p>{item.text}</p>
            </div>
          ))}
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
              <p>Hello! My name is <span className="highlight">Divyanshi pal</span></p>
              <h1 className="role-title">Web developer</h1>
              <p className="description">
                Passionate web developer focused on building dynamic, user-friendly applications.
              </p>
            </div>
            <div className="tech-icons">
              <div className="icons"><img src="https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/linkedin-logo-icon-3D.png" alt="Linkedin" /> 
                  <a
            href="https://www.linkedin.com/in/divyanshi-pal/"
            target="_blank"
            rel="noopener noreferrer"
          >Linkedin</a> </div>
              <div className="icons"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1lQSuN13eDF1ryrt6oJau0y4Ape1BZ0SqAIefnJO4noz4BPJPnR5WFcE0_Lhqp_iu40&usqp=CAU" alt="GitHub" /> <a
            href="https://github.com/Divyanshi2408"
            target="_blank"
            rel="noopener noreferrer"
          >Github</a> </div>
              <div className="icons"><img src="https://w7.pngwing.com/pngs/424/95/png-transparent-twitter-3d-twitter-twitter-logo-3d-twitter-logo-social-media-logo-3d-icon-thumbnail.png" alt="Twitter" />Twitter</div>
              <div className="icons"><img src="https://i.pinimg.com/736x/94/2f/2b/942f2baae65aa6a4b55728041ec8fed5.jpg" alt="Instagram" /> <a
            href="https://www.instagram.com/divyanshipal2808/"
            target="_blank"
            rel="noopener noreferrer"
          >Instagram</a> </div>
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
