import express from "express";
import { addPost } from "../Controllers/post.js";

const router = express.Router()// Create express router

router.get("/test", addPost) // Create a route for the /test path
   // res.json("this is the posts route") // we don't want to be wrting these opearations in the routes file so we create a controller file
   // controller file is a file that contains all the operations that we want to perform on the routes


export default router // Export the router so that it can be used in the index.js file