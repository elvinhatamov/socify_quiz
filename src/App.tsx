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
            {/* Use Group.png placed in the public folder. If it's in src, import instead. */}
            <img src="/Group.png" alt="Company Logo" className="logo" />
            <span className="logo-text">Socify</span>
          </a>
          <div className="header-text">
            <h1>SOC 2 Trust Readiness Challenge</h1>
            <p>How ready is your company for enterprise security reviews?</p>
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
          <p>Discover your SOC 2 Trust Readiness Score — take the 2-minute challenge.</p>
          <a href="https://socify.io" target="_blank" rel="noopener noreferrer" className="footer-link">Visit socify.io</a>
        </div>
      </div>
    </div>
  )
}

export default App
