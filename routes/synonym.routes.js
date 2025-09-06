import { Router } from "express";
import { AddSynonym, DeleteSynonym, GetAllSynonyms, GetOneSynonym, PatchSynonym } from "../controllers/synonym.controller.js";

const router=Router()

router.post("",AddSynonym)
router.get("",GetAllSynonyms)
router.get("/:id",GetOneSynonym)
router.patch("/:id",PatchSynonym)
router.delete("/:id",DeleteSynonym)

export default router