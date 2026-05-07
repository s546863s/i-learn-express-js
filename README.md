# Express.js Practice Project

This project is created for practicing Node.js, Express.js, API creation, and Client-Server Architecture concepts.

## 📚 Module Topics Covered

### Module 49: Getting Started with Node, Express & API

- Introduction to Server and Client-Server Architecture
- API, Request & Response Cycle
- Introduction to Node.js
- How Node.js Works
- Express.js Fundamentals
- Database Fundamentals
- SQL vs NoSQL
- MongoDB Introduction
- Environment Setup
- Installing Node Server
- Creating First API with Express
- GET Method
- Fetching Data in Next.js Application
- Creating User Form
- Sending Data to Server
- POST API
- Saving Data to Server

---

## 🚀 Technologies Used

- Node.js
- Express.js
- JavaScript (ES6)
- MongoDB
- Next.js
- REST API

---

## 📂 Project Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-link>
2️⃣ Go to Project Folder
cd project-name
3️⃣ Install Dependencies
npm install
4️⃣ Run the Server
node index.js

or

nodemon index.js
🌐 Basic Express Server Example
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server is running successfully');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
📮 API Endpoints
GET API
GET /users
POST API
POST /users
📌 Features
Create Express Server
Create REST API
Handle GET Request
Handle POST Request
Send Data from Client to Server
Fetch API Data
MongoDB Database Connection
JSON Data Handling
🧠 Learning Goals
Understand Backend Development Basics
Learn API Development
Understand Request & Response Cycle
Learn Express Routing
Connect Server with Database
Practice Full Stack Development
👨‍💻 Author

Abdus Salam

Frontend & React Developer