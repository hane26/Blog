import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";


const app = express()     // Create express app
app.use(express.json()) // for parsing application/json
app.use("/api/posts", postRoutes) // Use the postRoutes for the /api/posts path
app.use("/api/auth", authRoutes) // Use the authRoutes for the /api/auth path
app.use("/api/users", usersRoutes) // Use the usersRoutes for the /api/users path

// Routes
app.listen(8800,()=> { // 8800 is the port number
    // Start the server
    console.log("Backend server is running!")
})