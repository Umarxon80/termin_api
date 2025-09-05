import { Router } from "express";
import { AddAuthor, DeleteAuthor, GetAllAuthors, GetOneAuthor, PatchAuthor } from "../controllers/author.controller.js";
import authGuard from "../middlewares/guards/auth.guard.js";
import selfGuard from "../middlewares/guards/self.guard.js";

const router=Router()

router.post("",AddAuthor)
router.get("",GetAllAuthors)
router.get("/:id",authGuard,selfGuard,GetOneAuthor)
router.patch("/:id",PatchAuthor)
router.delete("/:id",DeleteAuthor)

export default router