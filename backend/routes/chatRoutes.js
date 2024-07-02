import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { accessChat } from "../controller/chatControllers.js";

const router = express.Router();

router.route("/").post(protect, accessChat);


export default router;
