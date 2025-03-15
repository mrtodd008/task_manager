# event_manager

Event Manager
📝 Event Manager Application 🚀
This is a Event management application built with ⚡ React Vite for the frontend and 🛠 Node.js/Express for the backend, using 🗄 MySQL for data persistence. It follows the Model-View-Controller (MVC) architectural pattern to ensure a clean and maintainable codebase.

✨ Features
✅ Create Events ➝ Add new events with 🏷 titles, 📝 descriptions, and 📅 event dates.
👀 View Events ➝ Display a 📋 list of all events.
✏️ Update Events ➝ Modify existing events, including changing their status.
🗑 Delete Events ➝ Remove ❌ events from the list.
🛢 MySQL Database ➝ Stores event data persistently using MySQL.
🎨 Responsive UI ➝ Built with 🎭 Material UI for a clean and user-friendly interface.
📂 MVC Architecture ➝ Follows the MVC pattern for better code organization.

🏗 Technologies Used
🎨 Frontend:
⚡ React Vite
🎭 Material UI
🔗 Axios

🛠 Backend:
🚀 Node.js
🔧 Express.js
🛢 MySQL2
🌍 CORS

📀 Database:
🗄 MySQL

⚙️ Prerequisites
🟢 Node.js (v18 or higher)
📦 npm or yarn
🛢 MySQL Server

🚀 Setup
1️⃣ Clone the Repository:
git clone https://github.com/mrtodd008/task_manager.git  
cd [project directory]

2️⃣ Backend Setup:
📂 Navigate to the backend directory:
cd backend

📦 Install dependencies:
npm install

📝 Create a .env file in the backend directory with your MySQL database credentials:
DB_HOST=your_host  
DB_USER=your_user  
DB_PASSWORD=your_password  
DB_DATABASE=your_database  
DB_PORT=your_database_port

🚀 Start the backend server:
node server.js

3️⃣ Frontend Setup:
📂 Navigate back to the project root and then to the src directory:
cd ../src

📦 Install dependencies:
npm install

🚀 Start the frontend development server:
npm run dev

🌍 Open your browser and navigate to 👉 http://localhost:5173 🎉

Project Structure
task-manager/
├── backend/
│ ├── controllers/
│ │ └── taskController.js
│ ├── models/
│ │ └── taskModel.js
│ ├── db.js
│ ├── server.js
│ └── package.json
├── src/
│ ├── components/
│ │ ├── TaskForm.jsx
│ │ ├── TaskItem.jsx
│ │ └── TaskList.jsx
│ ├── api.js
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
├── .env
├── README.md
└── package.json

🌐 API Endpoints
🔍 GET /api/tasks ➝ Fetch all 📝 tasks.
🔍 GET /api/tasks/:id ➝ Get a single task by 🆔 ID.
➕ POST /api/tasks ➝ Create a 🆕 task.
✏️ PUT /api/tasks/:id ➝ Update ✨ a task by ID.
🗑 DELETE /api/tasks/:id ➝ Remove ❌ a task by ID.

🔑 Implement user authentication ➝ Secure tasks with login/signup.
🚦 Add confirmation prioritization ➝ Set 🔴 high, 🟡 medium, or 🟢 low priority.
🏷 Implement event categories or tags ➝ Organize tasks better.
🔍 Add search and filtering functionality ➝ Quickly find events.
⚠️ Improve error handling and validation ➝ Ensure smooth operation.
🧪 Add unit and integration tests ➝ Boost app reliability.
🎨 Improve styling and responsiveness ➝ Make the UI ✨ sleek and mobile-friendly.
