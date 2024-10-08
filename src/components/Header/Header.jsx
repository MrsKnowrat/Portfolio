import List from "../List/List";
import "./Header.css"

const Header = () => {
  const listObjects = [
    {href: "#", name: "Home"},
    {href: "#about", name: "About"},
    {href: "#resume", name: "Resume"},
    {href: "#projects", name: "Projects"},
    {href: "#training", name: "Training"},
    {href: "#contact", name: "Contact"},
  ]
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">ERICA SOWDER | Software Developer </a>
        </div>
        <ul>
          {
            listObjects.map((list, index) => <List key={index} name={list.name} href={list.href}/>
            )
          }
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
