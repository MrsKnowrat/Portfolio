import './About.css'; 

const About = () => {
    return (
      <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
            <div>
              <p>
                Hi, I&apos;m Erica Sowder, a passionate web developer with expertise in
                JavaScript, Java, and various full stack technologies. I love
                building responsive and user-friendly web applications that
                deliver exceptional experiences.
              </p>
            </div>
            <div>
              <p>
                My professional history is built upon my passion for helping people solve a wide array of problems, ranging from US immigration, academic program administration, trouble-shooting student emergencies abroad and developing a grass-roots DEIB+ program for a small company. However, I also have a keen eye for design and functionality and enjoy applying this skill set to problem-solving. I have a strong focus on performance and strive to create clean, efficient, and scalable code that meets
                the highest industry standards.
              </p>
            </div>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/300x200" alt="About Image" />
        </div>
      </div>
    </section>
    )
  }
  
  export default About