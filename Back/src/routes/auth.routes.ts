import {Router } from "express";
const router = Router();

import { logOut, login } from "../controllers/auth.controller";

router.get("/login", login);
router.get("/logout", logOut);

export default router;