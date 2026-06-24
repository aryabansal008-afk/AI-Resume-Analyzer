# AI Resume Analyzer 

An AI powered Resume Checker built using the MERN Stack and Google's Gemini API.

The application analyzes resumes, evaluates ATS compatibility, provides actionable feedback, rewrites weak resume bullets, maintains complete version history, compares resume revisions and visualizes improvements through an analytics dashboard.

---

## Features

### Resume Management
- Upload PDF resumes
- Automatic text extraction
- Structured resume parsing
- Resume versioning system
- Multiple resume management

### AI Resume Analysis
- ATS Score (0-100)
- Keyword analysis
- Resume strengths
- Critical issues detection
- AI generated improvement suggestions
- Bullet point rewrites
- Missing keyword recommendations

### Resume Version Control
- Automatic version history
- Rewrite based version creation
- Compare different resume versions
- Text diff visualization
- Track resume evolution

### Dashboard
- ATS score trends
- Resume analytics
- Performance insights
- Activity timeline
- Keyword statistics
- Improvement tracking

### Security
- JWT Authentication
- Protected routes
- Rate limiting
- Input validation using Zod
- Secure password hashing

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### AI
- Google Gemini API

### Other Libraries
- Multer
- PDF Parse
- JWT
- Zod
- Diff
- Express Rate Limit

---

## Workflow

1. User Authentication
2. Upload Resume (PDF)
3. Extract Resume Text
4. Parse Resume into Structured Sections
5. Analyze Resume using Gemini AI
6. Generate ATS Score
7. Suggest Improvements
8. Rewrite Resume Bullets
9. Save New Resume Version
10. Compare Resume Versions
11. Track Progress via Dashboard

---

## API Highlights

### Authentication
- Register
- Login

### Resume
- Upload Resume
- Get Resume
- Delete Resume
- Resume Versions

### Analysis
- Analyze Resume
- Get Analysis History

### Rewrite
- Apply AI Rewrite
- Create New Resume Version

### Dashboard
- ATS Trends
- Insights
- Version History
- Activity Feed

---

---

## Installation

```bash
git clone https://github.com/yourusername/AI-Resume-Checker.git
```

```bash
cd AI-Resume-Checker
```

Install dependencies

```bash
npm install
```

Configure environment variables

```env
PORT=
MONGODB_URI=
JWT_SECRET=
GEMINI_API_KEY=
GEMINI_MODEL=
```

Start the backend

```bash
npm run dev
```

---

If you found this project useful, consider giving it a ⭐.