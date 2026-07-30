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
      {showQuiz ? (
        <Quiz onComplete={handleQuizComplete} />
      ) : (
        <Results answers={answers} onRetake={handleRetake} />
      )}
    </div>
  )
}

export default App
