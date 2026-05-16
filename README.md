# MERN Task Manager

A beginner-friendly, full-stack MERN (MongoDB, Express, React, Node.js) To-Do List application. It features a modern, clean, **pastel purple aesthetic** with smooth transitions and a responsive UI.

## Live Demo - [Live Demo](https://task-manager-app-24.vercel.app/)

##  Features

- **Full-stack CRUD operations**: Create, Read, Update, and Delete tasks.
- **Modern UI/UX**: Designed with a sleek, pastel purple aesthetic using Tailwind CSS.
- **Responsive Layout**: Works seamlessly on desktop and mobile devices.
- **Loading States**: Smooth user experience with data fetching indicators.
- **Custom Branding**: Configured with a custom favicon (`favicon.jpg`).
- **Robust Backend**: Node.js & Express REST API connected to MongoDB.
- **Enhanced Connectivity**: Configured with custom DNS resolution for reliable MongoDB Atlas connections.

## 🛠 Tech Stack

**Frontend:**
- React.js (Bootstrapped with Vite)
- Tailwind CSS (v3)
- Axios (for API requests)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- CORS, Dotenv
- `node:dns/promises` (for robust database connectivity)

## 🚀 Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd todo-app
```

### 2. Setup the Backend
Open a terminal and navigate to the backend directory:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder by copying the example:
```bash
cp .env.example .env
```
Ensure your `.env` file contains your MongoDB URI:
```
MONGO_URI=mongodb://localhost:27017/todo-app
PORT=5000
```
Start the backend development server:
```bash
npm run dev
```
*The backend API will run on http://localhost:5000*

### 3. Setup the Frontend
Open a **new** terminal window and navigate to the frontend directory:
```bash
cd frontend
npm install
```
Start the Vite development server:
```bash
npm run dev
```
*The frontend application will be accessible at http://localhost:5173*

## 🛣 API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/tasks` | Retrieve all tasks (sorted newest first) |
| POST | `/tasks` | Create a new task (requires `title` in body) |
| PUT | `/tasks/:id` | Toggle a task's completed status |
| DELETE | `/tasks/:id` | Delete a specific task by its ID |

## 📁 Folder Structure

```
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
    │   └── favicon.jpg
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
    ├── vite.config.js
    └── package.json
```

## 🧠 How it works

The backend serves a robust REST API built with **Express**, connected to a **MongoDB** database via **Mongoose** to persistently store tasks. It includes custom DNS configurations to ensure stable connections to MongoDB Atlas. 

The frontend is a **React** single-page application built with **Vite**, utilizing **Tailwind CSS** for the custom pastel purple styling and **Axios** for seamless API integration. The UI maintains all its state in `App.jsx`, fetching, rendering, and updating tasks while showing intuitive loading states and maintaining a clean layout.
