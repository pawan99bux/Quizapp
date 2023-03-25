import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
// import './QuizDetailScreen.css';

function FinishQuiz() {
  return (
    <Container fluid className="start_container">
      <div className="start_content">
      <h1 style={{color: "#8A2BE2"}}>The Daily Javascript Quiz</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatum expedita ullam nemo soluta, magni velit. Inventore voluptatum obcaecati, porro eaque velit quisquam sapiente nobis autem nostrum ut, sint maxime?</p>
      <Link to="/quiz">
        <Button className="start_button">Start Quiz</Button>
      </Link>
      </div>
    </Container>
  );
}

export default FinishQuiz;