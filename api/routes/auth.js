import express from "express";
import { addAuth, register,login,logout } from "../Controllers/auth.js";


const router = express.Router()// Create express router

router.get("/test", addAuth) // Create a route for the /test path
router.post("/register", register) // Create a route for the /register path, post methode is used to send data to the server
router.post("/login", login) // Create a route for the /login path, post methode is used to send data to the server
router.post("/logout", logout) 

export default router // Export the router so that it can be used in the index.js file
