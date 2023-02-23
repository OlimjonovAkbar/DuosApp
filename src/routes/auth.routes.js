import { Router } from "express";
import { getPage, Auth } from "../controller/auth.controll.js";
const router = Router()


router.get('/', getPage)
router.post('/login', Auth)


export default router;