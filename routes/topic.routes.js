import { Router } from "express";
import { AddTopic, DeleteTopic, GetAllTopics, GetOneTopic, PatchTopic } from "../controllers/topic.controller.js";

const router=Router()

router.post("",AddTopic)
router.get("",GetAllTopics)
router.get("/:id",GetOneTopic)
router.patch("/:id",PatchTopic)
router.delete("/:id",DeleteTopic)

export default router