import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import './QuizEndScreen.css';
import { BsArrowLeftShort, BsFillShareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/seekhologo.png'


function QuizEndScreen({ totalQuestion, result}) {
  const navigate = useNavigate();
	const clickHandler = () => {
		navigate('/', {replace: true});
	}
  return (
    <Container fluid className="">
      <div className="header">
        <div className="back_icon" onClick={clickHandler}><BsArrowLeftShort /></div>
      </div>
      <div className="result">
          <h3>The Daily Javascript Quiz</h3>
          <div className="score_box"> 
          <p style={{color: "#3CB371", fontSize: "12px"}}>You Scored</p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <h4>You are Awesome</h4>
          <p style={{fontSize: "12px", color: "gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis</p>
          </div>
          <div className="middle_section">
            <div className="middle_content">
          <p>
            Correct Answer
          </p>
          <span style={{ fontSize: "30px", color: "#800080", fontWeight: "bold"}}>{`${result.correctAnswers}/${totalQuestion}`}</span>
          </div>
          <div className="middle_content">
          <p>
            Total Questions
          </p>
          <span style={{ fontSize: "30px", color: "#800080", fontWeight: "bold"}}>{totalQuestion}</span>
          </div>
          </div>
          <div className="logo_wrapper">
            <img src={Logo} className="logo" alt="logo" />
            </div>
          <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}><span style={{color: "#3CB371", marginRight: "10px", fontSize:"14px", fontWeight: "bold"}}><BsFillShareFill /></span>Share it with your friends</p>
          </div>
          
        
    </Container>
  );
}

export default QuizEndScreen;