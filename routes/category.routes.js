import { Router } from "express";
import { AddCategory, DeleteCategory, GetAllCategorys, GetOneCategory, PatchCategory } from "../controllers/category.controller.js";

const router=Router()

router.post("",AddCategory)
router.get("",GetAllCategorys)
router.get("/:id",GetOneCategory)
router.patch("/:id",PatchCategory)
router.delete("/:id",DeleteCategory)

export default router