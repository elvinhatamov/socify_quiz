import { useMemo, useState } from 'react'
import { resultsData } from '../data/resultsData'
import './Results.css'

interface ResultsProps {
  answers: { [key: number]: number }
  onRetake: () => void
}

export default function Results({ answers, onRetake }: ResultsProps) {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum, points) => sum + points, 0)
  }, [answers])

  const result = useMemo(() => {
    if (totalScore <= 18) return resultsData.explorer
    if (totalScore <= 28) return resultsData.builder
    if (totalScore <= 35) return resultsData.enterpriseReady
    return resultsData.trustLeader
  }, [totalScore])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would send the email to your backend
      console.log('Email submitted:', email, 'Score:', totalScore)
      setEmailSubmitted(true)
      setTimeout(() => setEmailSubmitted(false), 3000)
    }
  }

  const handleBookDemo = () => {
    window.open('https://socify.io/demo', '_blank')
  }

  return (
    <div className="results-container">
      <div className="results-card">
        {/* Header with Score */}
        <div className="results-header">
          <div className="score-badge">
            <div className="score-circle">
              <div className="score-number">{totalScore}</div>
              <div className="score-max">/ 40</div>
            </div>
          </div>
          <h1 className="results-title">{result.title}</h1>
          <p className="results-subtitle">{result.subtitle}</p>
        </div>

        {/* Description */}
        <div className="results-description">
          <p>{result.description}</p>
        </div>

        {/* Recommended Actions */}
        <div className="recommendations-section">
          <h3 className="recommendations-title">Recommended Next Steps</h3>
          <ul className="recommendations-list">
            {result.nextSteps.map((step, index) => (
              <li key={index} className="recommendation-item">
                <span className="checkmark">✓</span>
                <span className="step-text">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="results-actions">
          <button className="action-button primary-button" onClick={handleBookDemo}>
            📅 Book Demo
          </button>
          <button className="action-button secondary-button" onClick={onRetake}>
            Retake Quiz
          </button>
        </div>

        {/* Email Capture */}
        <div className="email-section">
          <p className="email-prompt">Get your personalized SOC 2 roadmap:</p>
          <form onSubmit={handleEmailSubmit} className="email-form">
            <input
              type="email"
              placeholder="your@company.com"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="email-submit-button">
              Send Results
            </button>
          </form>
          {emailSubmitted && (
            <p className="email-success">✓ Results sent! Check your email.</p>
          )}
        </div>

        {/* Footer CTA */}
        <div className="results-footer">
          <p className="footer-cta">Ready to strengthen your security posture?</p>
          <button className="book-demo-button" onClick={handleBookDemo}>
            Book Demo with Socify
          </button>
        </div>
      </div>
    </div>
  )
}
