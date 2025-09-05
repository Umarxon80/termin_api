import { Router } from "express";
import { AddAuthor_social, DeleteAuthor_social, GetAllAuthor_socials, PatchAuthor_social } from "../controllers/author_social.controller.js";
import selfGuard from "../middlewares/guards/self.guard.js";
import authGuard from "../middlewares/guards/auth.guard.js";

const router=Router()

router.post("",AddAuthor_social)
router.get("",GetAllAuthor_socials)
router.get("/:id",authGuard,selfGuard ,GetAllAuthor_socials)
router.patch("/:id",PatchAuthor_social)
router.delete("/:id",DeleteAuthor_social)

export default router