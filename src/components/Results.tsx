import { useMemo } from 'react'
import { resultsData } from '../data/resultsData'
import './Results.css'

interface ResultsProps {
  answers: { [key: number]: number }
  onRetake: () => void
}

export default function Results({ answers, onRetake }: ResultsProps) {
  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum, points) => sum + points, 0)
  }, [answers])

  const result = useMemo(() => {
    if (totalScore <= 18) return resultsData.explorer
    if (totalScore <= 28) return resultsData.builder
    if (totalScore <= 35) return resultsData.enterpriseReady
    return resultsData.trustLeader
  }, [totalScore])

  return (
    <div className="results-container">
      <div className="results-card">
        {/* Header with Score */}
        <div className="results-header">
          <div className="score-badge">
            <div className="score-number">{totalScore}</div>
            <div className="score-max">/ 40</div>
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
          <button className="action-button primary-button" onClick={onRetake}>
            Retake Quiz
          </button>
          <button className="action-button secondary-button">
            Get Full Assessment
          </button>
        </div>

        {/* Email Capture (Optional) */}
        <div className="email-section">
          <p className="email-prompt">Get your results and SOC 2 checklist:</p>
          <div className="email-input-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="email-submit-button">Send Results</button>
          </div>
        </div>
      </div>
    </div>
  )
}
