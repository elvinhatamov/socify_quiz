# SOC 2 Trust Readiness Quiz

A mobile-friendly interactive quiz application to assess an organization's SOC 2 compliance readiness.

## Features

✅ **10-Question Quiz** - Comprehensive SOC 2 readiness assessment
✅ **Mobile Responsive** - Optimized for all screen sizes
✅ **Progress Tracking** - Visual progress bar showing quiz completion
✅ **Smart Scoring** - Automatic calculation of Trust Readiness Score (0-40)
✅ **Personalized Results** - Tailored recommendations based on score
✅ **4 Maturity Levels** - Compliance Explorer → Trust Leader
✅ **Email Capture** - Lead generation integration
✅ **Beautiful UI** - Modern gradient design with smooth animations

## Quiz Levels

- **10-18 Points:** Compliance Explorer
- **19-28 Points:** Trust Builder
- **29-35 Points:** Enterprise Ready
- **36-40 Points:** Trust Leader

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

## File Structure

```
src/
├── components/
│   ├── Quiz.tsx          # Main quiz component
│   ├── Results.tsx       # Results display component
│   ├── Quiz.css          # Quiz styles
│   └── Results.css       # Results styles
├── data/
│   ├── quizData.ts       # 10 quiz questions
│   └── resultsData.ts    # Result descriptions & recommendations
├── App.tsx               # Main app component
├── App.css               # App styles
├── main.tsx              # React entry point
└── index.css             # Global styles
```

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Styling with animations

## Features Included

- ✅ Only quiz visible on screen
- ✅ Mobile-first responsive design
- ✅ Progress bar with question counter
- ✅ Answer selection with visual feedback
- ✅ Previous/Next navigation
- ✅ Score calculation and results page
- ✅ Personalized maturity profile
- ✅ Recommended next steps
- ✅ Email capture for lead generation
- ✅ Retake quiz functionality

## Next Steps

- [ ] Connect email submission to backend
- [ ] Add analytics tracking
- [ ] Send automated follow-up emails
- [ ] Create admin dashboard for leads
- [ ] Add QR code generation for conferences
- [ ] Deploy to production
