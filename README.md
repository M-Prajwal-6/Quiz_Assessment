# Quiz and Assessment App

A responsive React quiz covering general knowledge, computer science, and JavaScript. Questions are stored locally; no account, backend, or database is required.

## Features

- Ten multiple-choice questions with one answer at a time
- Previous/next navigation that preserves selected answers
- Ten-minute countdown with automatic submission
- Score, percentage, and correct/incorrect/unanswered totals
- Answer review and quiz retake
- Responsive layout for desktop and mobile

## Run Locally

Install Node.js, then clone the repository and install its dependencies:

```bash
git clone https://github.com/M-Prajwal-6/Quiz_Assessment.git
cd Quiz_Assessment
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`. Keep the terminal running while you use the app.

## Project Files

- `src/App.jsx` manages quiz state, timer, and page flow.
- `src/data/questions.js` contains the quiz questions and answers.
- `src/components/` contains the reusable welcome, quiz, question, timer, result, and review components.
- `src/App.css` and `src/index.css` contain the app styles.
- `index.html` sets the page title and metadata.

## Test the App

1. Start a quiz and select an answer.
2. Move to another question, go back, and confirm the answer remains selected.
3. Finish with correct, incorrect, and unanswered questions; check the result totals.
4. Review the selected and correct answers.
5. Retake the quiz and confirm the answers and timer reset.
6. To test automatic submission quickly, temporarily change `QUIZ_DURATION` in `src/App.jsx` to `5`; restore it to `10 * 60` afterward.

Run `npm run build` to check the production build and `npm run lint` to check the source.
