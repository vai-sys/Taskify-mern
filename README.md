# 📝 Taskify - To-Do App (Dockerized)

Taskify is a simple **To-Do application** built with the **MERN stack**. This project is fully containerized using **Docker** and can be deployed with **Docker Compose**.

---

## 🚀 Getting Started

### 📌 **Prerequisites**
Ensure you have the following installed:
- [Docker](https://www.docker.com/)


---

## 🛠️ **Setup & Run**

### 🔹 1. Clone the Repository
```sh
git clone https://github.com/vai-sys/Taskify-mern.git
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



