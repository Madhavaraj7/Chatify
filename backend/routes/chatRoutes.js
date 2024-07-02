import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { accessChat, createGroupChat, fetchChats, renameGroup } from "../controller/chatControllers.js";

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);





export default router;
