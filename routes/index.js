import { Router } from "express";
import authorRouter from "./author.routes.js";
import socialRouter from "./social.routes.js";
import author_socialRouter from "./author_social.routes.js";
import topicRouter from "./topic.routes.js";
import dictionaryRouter from "./dictionary.routes.js";
import categoryRouter from "./category.routes.js";
import descriptionRouter from "./description.routes.js";
import synonymRouter from "./synonym.routes.js";

import authRouter from "./auth.routes.js";


const router=Router()

router.use("/author",authorRouter)
router.use("/auth",authRouter)
router.use("/social",socialRouter)
router.use("/author_social",author_socialRouter)
router.use("/topic",topicRouter)
router.use("/dictionary",dictionaryRouter)
router.use("/category",categoryRouter)
router.use("/description",descriptionRouter)
router.use("/synonym",synonymRouter)

export default router