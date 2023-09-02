import { Router } from "express";
import authRoutes from "./auth.routes"
import publicRoutes from "./public.routes"


const router = Router();

router.use('/', publicRoutes)
router.use('/auth', authRoutes)


export default router;