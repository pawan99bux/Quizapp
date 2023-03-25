import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import './App.css';
import QuizAttemptScreen from './components/quiz/Quiz';
import QuizDetailScreen from './pages/QuizDetailScreen';
import QuizEndScreen from './pages/QuizEndScreen'

function App() {
  return (
    <Router>
      <Container fluid className="p-0">
        <Routes>
        <Route exact path="/" element={<QuizDetailScreen />} />
        <Route path="/quiz" element={<QuizAttemptScreen />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
