import express from "express";
import {
  addFeedBacks,
  getUser,
  loginUser,
  registerUser,
} from "../Controller/user.js";
import { varifyToken } from "../Authentication/vairifyUserToken.js";

const router = express.Router();

router
  .post("/add/feedback", varifyToken, addFeedBacks)
  .post("/register", registerUser)
  .post("/login", loginUser)
  .get("/get", varifyToken, getUser);
export default router;
