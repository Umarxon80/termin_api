import { Router } from "express";
import { AddAuthor_social, DeleteAuthor_social, GetAllAuthor_socials, PatchAuthor_social } from "../controllers/author_social.controller.js";

const router=Router()

router.post("",AddAuthor_social)
router.get("",GetAllAuthor_socials)
router.get("/:id",GetAllAuthor_socials)
router.patch("/:id",PatchAuthor_social)
router.delete("/:id",DeleteAuthor_social)

export default router