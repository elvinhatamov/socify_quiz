import { useState } from 'react'
import { quizData } from '../data/quizData'
import './Quiz.css'

interface QuizProps {
  onComplete: (answers: { [key: number]: number }) => void
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: number }>({})

  const handleAnswer = (points: number) => {
    const newAnswers = { ...answers, [currentQuestion]: points }
    setAnswers(newAnswers)

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete(newAnswers)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const question = quizData[currentQuestion]
  const isAnswered = currentQuestion in answers
  const progress = ((currentQuestion + 1) / quizData.length) * 100

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="progress-text">
            Question {currentQuestion + 1} of {quizData.length}
          </p>
        </div>

        {/* Question */}
        <div className="question-section">
          <h2 className="question-title">{question.question}</h2>
        </div>

        {/* Answer Options */}
        <div className="options-section">
          {question.options.map((option, index) => {
            const letters = ['A', 'B', 'C', 'D']
            const points = index + 1
            const isSelected = answers[currentQuestion] === points

            return (
              <button
                key={index}
                className={`option-button ${isSelected ? 'selected' : ''}`}
                onClick={() => handleAnswer(points)}
              >
                <span className="option-letter">{letters[index]}</span>
                <span className="option-text">{option}</span>
              </button>
            )
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-section">
          <button
            className="nav-button prev-button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>

          <button
            className={`nav-button next-button ${isAnswered ? 'enabled' : 'disabled'}`}
            onClick={() => {
              if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
              }
            }}
            disabled={!isAnswered}
          >
            {currentQuestion === quizData.length - 1 ? 'Submit' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  )
}
