import express from "express";
import { addUser } from "../Controllers/user.js";


const router = express.Router()// Create express router

router.get("/test", addUser) // Create a route for the /test path  // making an api request with get method



export default router // Export the router so that it can be used in the index.js file
