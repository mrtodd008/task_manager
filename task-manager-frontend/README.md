# Task Manager

A simple and efficient task management application to help users create, track, and manage their tasks with ease.

## 🚀 Features

- ✅ Create, update, and delete tasks
- 📅 Set due dates and priorities
- 🔔 Notifications for upcoming deadlines
- 🏷️ Categorize tasks by status (To-Do, In Progress, Done)
- 📊 Admin dashboard to manage users and tasks
- 🔄 Real-time updates and collaboration

## 🛠️ Tech Stack

### **Frontend** (React Vite)

- React.js (UI library)
- Material-UI (MUI) for styling
- React Router (Navigation)
- Axios (API requests)

### **Backend** (Node.js & Express)

- Node.js (Web framework)
- MySQL (Database & ORM)
- JWT (Authentication)
- WebSockets (Real-time updates)

## 📦 Installation

### **1. Clone the Repository**

```sh
git clone https://github.com/mrtodd008/task_manager.git
cd task-manager
```

Backend:
Install Dependencies

cd task-manager-backend
npm install

Frontend:
cd ../task-manager-frontend
npm install

Set Up Environment Variables
Create a .env file in the backend directory:

DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_DATABASE=task_manager

Run Application

Start Backend:

cd task-manager-backend
npm start

Start Frontend:

cd ../task-manager-frontend
npm run dev

📖 API Endpoints

Method Endpoint Description
GET /api/tasks Get all tasks
POST /api/tasks Create a new task
PUT /api/tasks/:id Update a task
DELETE /api/tasks/:id Delete a task

🖥️ Admin Features
Manage users and their tasks
Assign roles and permissions
View task analytics and reports

📌 To-Do
Add user authentication
Implement task comments
Enhance real-time notifications

🤝 Contributing
Pull requests are welcome! Open an issue for discussions.

📜 License
This project is licensed under the MIT License.
