import { Router } from "express";
import { AddAuthor, DeleteAuthor, GetAllAuthors, GetOneAuthor, PatchAuthor } from "../controllers/author.controller.js";

const router=Router()

router.post("",AddAuthor)
router.get("",GetAllAuthors)
router.get("/:id",GetOneAuthor)
router.patch("/:id",PatchAuthor)
router.delete("/:id",DeleteAuthor)

export default router