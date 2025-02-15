const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const authRoutes = require("./routers/authRoute");
const taskRoutes = require("./routers/taskRoute");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);

app.get("/", (req, res) => res.json({ status: "API is running" }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ 
    message: "Internal Server Error", 
    error: process.env.NODE_ENV === 'production' ? {} : err 
  });
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});