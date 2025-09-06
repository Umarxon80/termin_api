import { Router } from "express";
import { AddDictionary, DeleteDictionary, GetAllDictionarys, GetOneDictionary, PatchDictionary } from "../controllers/dictionary.controller.js";

const router=Router()

router.post("",AddDictionary)
router.get("",GetAllDictionarys)
router.get("/:id",GetOneDictionary)
router.patch("/:id",PatchDictionary)
router.delete("/:id",DeleteDictionary)

export default router