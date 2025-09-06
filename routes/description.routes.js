import { Router } from "express";
import { AddDescription, DeleteDescription, GetAllDescriptions, GetOneDescription, PatchDescription } from "../controllers/description.controller.js";

const router=Router()

router.post("",AddDescription)
router.get("",GetAllDescriptions)
router.get("/:id",GetOneDescription)
router.patch("/:id",PatchDescription)
router.delete("/:id",DeleteDescription)

export default router