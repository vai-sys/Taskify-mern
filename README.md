# 📝 Taskify - To-Do App (Dockerized)

Taskify is a simple **To-Do application** built with the **MERN stack** (MongoDB, Express, React, Node.js). This project is fully containerized using **Docker** and can be deployed with **Docker Compose**.

---

## 🚀 Getting Started

### 📌 **Prerequisites**
Ensure you have the following installed:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🛠️ **Setup & Run**

### 🔹 1. Clone the Repository
```sh
git clone https://github.com/your-username/Taskify.git
cd Taskify
```

### 🔹 2. Build and Start the Containers
```sh
docker compose up -d --build
```
This will:
- Build and start the **backend** on port `3000`
- Build and start the **frontend** on port `5173`
- Start **MongoDB** on port `27017`

---

## ✅ **Check if it's Running**
### 🔦 **Frontend**
Visit: [http://localhost:5173](http://localhost:5173)  

### ⚙️ **Backend**
Check API: [http://localhost:3000](http://localhost:3000)  

### 🛂 **MongoDB**
Check if MongoDB is running:
```sh
docker logs taskify-main-mongodb-1
```

---

## 🛠️ **Stopping the Project**
To stop the containers:
```sh
docker compose down
```

To stop and remove all data:
```sh
docker compose down -v
```

---

## 👤 **Project Structure**
```
Taskify/
│── backend/       # Node.js & Express API
│── frontend/      # React Frontend
│── docker-compose.yml  # Docker Compose config
│── Dockerfile (backend)
│── Dockerfile (frontend)
│── README.md
```

---

## 🛠 **Troubleshooting**
### ❌ Port Already in Use?
Stop existing processes on ports `3000`, `5173`, or `27017`:
```sh
sudo kill $(sudo lsof -t -i:3000 -i:5173 -i:27017)
```

### 🛠 MongoDB Connection Issue?
Check your `.env` file in `backend/`:
```env
MONGO_URI=mongodb://mongodb:27017/taskify
```

---

## 🤝 **Contributing**
Feel free to contribute! Fork, modify, and create a **pull request**.

---

## 🐝 **License**
MIT License © 2025 Vaishnavi Thorat

