# Feedback Collection System

A simple **Feedback Collection System** built with **Node.js**, **Express.js**, and **MongoDB** to collect user feedback. This project serves a frontend feedback form and stores user responses in a MongoDB database.

---

## 🚀 Features

- **User Feedback Submission** with Name, Contact, Email, and Feedback fields
- **MongoDB Database Integration** (Local/Atlas)
- **Express Static File Serving** for Frontend Integration
- **Error Handling & Validation**

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Frontend:** HTML, CSS (served statically)

---

## 📂 Project Structure

```
Feedback Collection System/
│── backend/                # Backend Code
│   ├── models/             # Mongoose Schema
│   │   ├── feedback.js     # Feedback Model
│
│── frontend/               # Static Frontend Files
│   ├── index.html          # Feedback Form
│   ├── style.css           # CSS Styles
│   ├── assets/             # Assets Folder
│   │   ├── background.jpg  # Background Image
│
│── server.js              # Main Server File (Outside Backend Folder)
│── .gitignore               # Ignore unnecessary files
│── package.json            # Project Dependencies
```

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/SouravPaul-01/CoderOne-Internship-Projects.git

cd Feedback Collection System
```

/CoderOne-Internship-Projects/tree/master/Feedback%20Collection%20System

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Start the Server**

```sh
node server.js
```

or use **nodemon** for automatic restart:

```sh
npx nodemon server.js
```

Server will start at: **http://localhost:3000**

---

## 🚀 API Endpoints

### **1️⃣ Submit Feedback**

**Endpoint:** `POST /submit`
**Body Parameters:**

```json
{
  "name": "John Doe",
  "contact": "1234567890",
  "email": "johndoe@example.com",
  "feedback": "Great service!"
}
```

**Response:**

- `200 OK`: "Feedback submitted successfully"
- `500 Internal Server Error`: "Error saving feedback"

---

## 🛠 Troubleshooting

### **1️⃣ Port Already in Use?**

Run:

```sh
npx kill-port 3000
```

Or manually kill the process:

```sh
taskkill /F /PID <PID> (Windows)
kill -9 <PID> (Mac/Linux)
```

### **2️⃣ MongoDB Connection Issues?**

- Ensure MongoDB is running (`mongod` for local setup).

---

## 💡 Future Improvements

- Add **frontend validation** for feedback submission.
- Implement **user authentication**.
- Deploy to **Heroku/Vercel** with **MongoDB Atlas**.

---

## 👨‍💻 Author

**Sourav Paul**  
LinkedIn: [Sourav Paul](https://www.linkedin.com/in/sourav-paul-b9a83b232/)  
GitHub: [SouravPaul-01](https://github.com/SouravPaul-01)
