import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { accessChat, createGroupChat, fetchChats } from "../controller/chatControllers.js";

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);




export default router;
