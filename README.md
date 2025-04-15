# 📝 Todo Application — React + Node + MongoDB (MERN Stack)

### 👨‍💻 Task Overview
This project is a fully functional Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js). It features user authentication, persistent todos, and a responsive user interface styled with SCSS.

---

## 🚀 Tech Stack

| Frontend             | Backend                  | Others                       |
|----------------------|--------------------------|------------------------------|
| React (CRA)          | Node.js + Express.js     | MongoDB Atlas (Database)     |
| SCSS (Responsive UI) | Mongoose (ODM)           | Redux Toolkit (State Mgmt)   |
| React Router DOM     | JWT Auth Middleware      | Redux Thunk (Optional)       |
| Axios (API Calls)    | CORS, dotenv             | Vercel (Deployed Frontend)   |

---

## ✅ Features

### 🔐 Authentication
- User Sign Up (email + password)
- User Login (email + password)
- JWT-based authentication
- Auth-protected routes

### 🧠 Todo Features
- Add Todo
- Edit Todo
- Delete Todo
- Toggle Todo (mark complete/incomplete)
- Users can only see their own todos

### 📱 Responsiveness
- Fully mobile, tablet & desktop compatible
- SCSS used with modular structure
- Smooth transitions and animations

### 📦 Folder Structure

#### Frontend

todo-frontend/ ├── public/ ├── src/ │ ├── assets/ │ ├── components/ │ ├── pages/ │ ├── redux/ │ ├── services/ │ ├── styles/ │ ├── App.js │ └── index.js ├── .env ├── package.json


#### Backend

todo-backend/ ├── controllers/ ├── routes/ ├── models/ ├── middleware/ ├── config/ ├── .env ├── server.js ├── vercel.json └── package.json


---

## 🔄 API Endpoints

| Method | Endpoint              | Description           |
|--------|------------------------|-----------------------|
| POST   | /api/auth/signup       | User Signup           |
| POST   | /api/auth/login        | User Login            |
| GET    | /api/todos             | Get User Todos        |
| POST   | /api/todos             | Add Todo              |
| PUT    | /api/todos/:id         | Update Todo           |
| DELETE | /api/todos/:id         | Delete Todo           |

---

## 🌐 Deployment

- **Frontend**: [https://todo-mern-app-frontend.vercel.app](https://todo-mern-app-frontend.vercel.app)
- **Backend**: [https://todo-mern-app-backend-server.vercel.app](https://todo-mern-app-backend-server.vercel.app)

---

## ⚙️ Environment Variables

### Frontend `.env`

REACT_APP_BACKEND_BASE_URL=https://todo-mern-app-backend-server.vercel.app


### Backend `.env`

MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/todo-db?retryWrites=true&w=majority 
JWT_SECRET=your_jwt_secret_key


---

## 🎁 Bonus

- ✅ Deployed using **Vercel**
- ✅ CORS configured properly for cross-origin frontend-backend communication
- ✅ Clean and scalable code structure with reusable components

---

## 📬 Submission

- ❌ Removed `node_modules` and `build` folder
- ✅ Zipped the complete frontend and backend
- ✅ Attached via [https://wetransfer.com](https://wetransfer.com)
- ✅ Added my name and email in the transfer description

---

## 👤 Developer Info

**Name**: *Aftab Bashir*  
**Email**: *aftab48554@gmail.com*

---

> Thank you for the opportunity! Let me know if you'd like a demo walkthrough or enhancements 🚀
