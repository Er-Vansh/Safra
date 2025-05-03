# 🌐 Safra – Google Drive Clone

Safra is a self-hosted Google Drive clone built with a powerful backend using **Node.js**, **Express**, and **MongoDB**. It allows users to upload, manage, and retrieve files securely in the cloud, with a clean API design and scalable architecture.

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-%23238956.svg?logo=mongodb&logoColor=white)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

---

## 🚀 Features

- 🔐 User authentication and session management
- ☁️ Upload, download, and delete files
- 📁 Public and private sharing options
- 🗂️ File metadata support (type, size, etc.)
- 🔒 Cookie-based session storage
- 💾 File storage on Firebase 

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Storage:** Firebase Storage 
- **Authentication:** Cookie-based sessions
- **View Engine (optional):** EJS

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/safra.git
cd safra

npm install express mongoose ejs firebase-admin multer multer-firebase-storage bcrypt jsonwebtoken dotenv cookie-parser express-validator

