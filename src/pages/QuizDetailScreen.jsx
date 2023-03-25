import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import './QuizDetailScreen.css';
import Logo from '../assets/seekhologo.png'
import { SiXdadevelopers, SiGithub } from "react-icons/si";
import { BsFileEarmarkText, BsQuestionCircle, BsStopwatch, BsCalendar4Event } from "react-icons/bs";


function QuizDetailScreen() {
  return (
    <>
    <Container className="start_container">
    <div className="logo_wrapper">
            <img src={Logo} className="logo" alt="logo" />
            </div>
    
      <div className="start_content">
      <h1 style={{color: "#8A2BE2"}}>The Daily <span style={{color: "#3CB371"}}>Javascript</span> Quiz</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatum expedita ullam nemo soluta, magni velit. Inventore voluptatum obcaecati, porro eaque velit quisquam sapiente nobis autem nostrum ut, sint maxime?</p>
      <Link to="/quiz">
        <Button className="start_button">Start Quiz</Button>
      </Link>
      </div>
      <div className="list_section">
      <h3 style={{marginBottom: "-10px"}}>This Quiz Includes</h3>
      <ul>
        <li><span><BsFileEarmarkText /></span>50% Passing Percentage</li>
        <li><span><BsQuestionCircle /></span>5 Question</li>
        <li><span><BsStopwatch /></span>5 Mins</li>
        <li><span><BsCalendar4Event /></span>1 Attempt Daily</li>
      </ul>
      </div>
    </Container>
    <div className="dev_section">
      <p><span><SiXdadevelopers /></span>Developer:- Pawan Singh</p>
      <a href="https://github.com/pawan99bux" rel="noreferrer" target="_blank"><span><SiGithub /></span>Github:- pawan99bux</a>
    </div>
    </>
  );
}

export default QuizDetailScreen;