import { Router } from "express";
import { getPage, Auth } from "../controller/auth.controll.js";
const router = Router()


router.get('/', (req,res)=>{
    res.render('dashboard', {title: 'Dashboard '})
})


export default router;