import linkedinLogo from "../../assets/linkedin-icon-3.svg";
import githubLogo from "../../assets/github-icon-2.svg";
import "./Footer.css"

const Footer = () => {
  const listObjects = [
    {href: "https://www.linkedin.com/in/erica-sowder", name: "LinkedIn", desc: "LinkedIn"},
    {href: "https://github.com/MrsKnowrat", name: "GitHub", desc: "GitHub"},
  ];

  return (
    <footer id="contact" className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <p>Email: esowder@indeed.com</p>
          <p>Phone: 512-584-7197</p>
        </div>
        <div className="footer-section">
          <ul>
            {listObjects.map((list, index) => (
              <li key={index}>
                <a href={list.href} target="_blank" rel="noopener noreferrer">
                  <img src={list.name === "LinkedIn" ? linkedinLogo : githubLogo} alt={`${list.name} Icon`} />
                  {list.desc}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer