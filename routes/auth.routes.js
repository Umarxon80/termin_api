import { Router } from "express";
import { login, logout, refreshAccessToken } from "../controllers/auth.controller.js";

const router=Router()
router.post("/login",login)
router.post("/logout",logout)
router.post("/refresh",refreshAccessToken)


export default router