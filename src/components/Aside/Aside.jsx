import "./Aside.css"
import reactLogo from "../../assets/react-2.svg";
import javaScriptLogo from "../../assets/logo-javascript.svg";
import htmlLogo from "../../assets/html-1.svg";
import cssLogo from "../../assets/css-3.svg";
import javaLogo from "../../assets/java.svg";
import springBootLogo from "../../assets/spring-3.svg";
import sqlLogo from "../../assets/postgresql.svg";
import openAILogo from "../../assets/openai-2.svg";

const Aside = () => {
  return (
    <aside>
      <ul>
        <li><img src={reactLogo} alt="React Logo" />React</li>
        <li><img src={javaScriptLogo} alt="JavaScript Logo" />JavaScript</li>
        <li><img src={htmlLogo} alt="HTML Logo" />HTML</li>
        <li><img src={cssLogo} alt="CSS Logo" />CSS</li>
        <li><img src={javaLogo} alt="Java Logo" />Java</li>
        <li><img src={springBootLogo} alt="Spring Boot Logo" />Spring Boot</li>
        <li><img src={sqlLogo} alt="SQL Logo" />PostgreSQL</li>
        <li><img src={openAILogo} alt="OpenAI Logo" />OpenAI</li>
      </ul>
    </aside>
  );
};

export default Aside;
