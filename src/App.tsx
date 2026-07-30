import { useState } from 'react'
import Quiz from './components/Quiz'
import Results from './components/Results'
import './App.css'

interface Answers {
  [key: number]: number
}

function App() {
  const [showQuiz, setShowQuiz] = useState(true)
  const [answers, setAnswers] = useState<Answers>({})

  const handleQuizComplete = (quizAnswers: Answers) => {
    setAnswers(quizAnswers)
    setShowQuiz(false)
  }

  const handleRetake = () => {
    setAnswers({})
    setShowQuiz(true)
  }

  return (
    <div className="app">
      <div className="app-header">
        <div className="header-content">
          <a href="https://socify.io" className="logo-link" target="_blank" rel="noopener noreferrer">
            <img src="https://socify.io/logo.png" alt="Socify Logo" className="logo" />
            <span className="logo-text">Socify</span>
          </a>
          <div className="header-text">
            <h1>SOC 2 Trust Readiness</h1>
            <p>Discover Your Security Maturity Level</p>
          </div>
        </div>
      </div>
      <div className="app-container">
        {showQuiz ? (
          <Quiz onComplete={handleQuizComplete} />
        ) : (
          <Results answers={answers} onRetake={handleRetake} />
        )}
      </div>
      <div className="app-footer">
        <div className="footer-content">
          <p>&copy; 2026 Socify. All rights reserved.</p>
          <a href="https://socify.io" target="_blank" rel="noopener noreferrer" className="footer-link">Visit socify.io</a>
        </div>
      </div>
    </div>
  )
}

export default App
