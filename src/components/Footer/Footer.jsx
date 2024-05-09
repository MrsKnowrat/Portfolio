import List from "../List/List";
import "./Footer.css"

const Footer = () => {
  const listObjects = [
    {href: "#", name: "LinkedIn", desc: "www.linkedin.com/in/erica-sowder"},
    {href: "#", name: "GitHub", desc: "https://github.com/MrsKnowrat"},
  ]

  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: esowder@indeed.com</p>
          <p>Phone: 512-584-7197</p>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            {
              listObjects.map((list, index) => <List key={index} name={list.name} href={list.href} desc={list.desc}/>
              )
            }
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer