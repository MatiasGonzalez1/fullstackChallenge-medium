import {Router } from "express";
const router = Router();

import { home } from "../controllers/home.controller";
router.get("/", home);

export default router;