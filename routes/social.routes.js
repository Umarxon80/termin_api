import { Router } from "express";
import { AddSocial, DeleteSocial, GetAllSocials, GetOneSocial, PatchSocial } from "../controllers/social.controller.js";

const router=Router()

router.post("",AddSocial)
router.get("",GetAllSocials)
router.get("/:id",GetOneSocial)
router.patch("/:id",PatchSocial)
router.delete("/:id",DeleteSocial)

export default router