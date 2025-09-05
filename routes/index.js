import { Router } from "express";
import authorRouter from "./author.routes.js";
import socialRouter from "./social.routes.js";
import author_socialRouter from "./author_social.routes.js";


const router=Router()

router.use("/author",authorRouter)
router.use("/social",socialRouter)
router.use("/author_social",author_socialRouter)

export default router