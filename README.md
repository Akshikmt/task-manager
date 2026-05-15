# My Todo App

A beginner-friendly, full-stack MERN To-Do List application with a modern pastel purple aesthetic.

![App Screenshot](#) <!-- Placeholder for screenshot -->

## Tech Stack

**Frontend:**
- React.js (via Vite)
- Tailwind CSS (v3)
- Axios

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- CORS, Dotenv

## Setup Instructions

### 1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd todo-app
\`\`\`

### 2. Setup the Backend
\`\`\`bash
cd backend
npm install
\`\`\`
Create a `.env` file in the backend folder by copying the example:
\`\`\`bash
cp .env.example .env
\`\`\`
Start the backend server:
\`\`\`bash
npm run dev
\`\`\`
*The backend will run on http://localhost:5000*

### 3. Setup the Frontend
Open a new terminal window:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
*The frontend will run on http://localhost:5173*

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/tasks` | Return all tasks, sorted newest first |
| POST | `/tasks` | Create a new task (requires `title`) |
| PUT | `/tasks/:id` | Toggle a task's completed status |
| DELETE | `/tasks/:id` | Delete a task by ID |

## Folder Structure

\`\`\`
todo-app/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── api/
    │   │   └── api.js
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── FilterButtons.jsx
    │   │   ├── TodoList.jsx
    │   │   ├── TodoItem.jsx
    │   │   └── AddTask.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── vite.config.js
    └── package.json
\`\`\`

## How it works

The backend serves a REST API built with Express, connected to a MongoDB database via Mongoose to store tasks. The frontend is a React application built with Vite, utilizing Tailwind CSS for styling and Axios for API requests. The UI maintains all state in `App.jsx`, fetching and updating tasks while showing a loading state. The design follows a modern, minimal aesthetic with smooth transitions and a clean layout.
