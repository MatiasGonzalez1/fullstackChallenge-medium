import {Router } from "express";
import { createUser, loginUser, logout, profile } from "../controllers/auth.controller.js";
import {validateCreateUser} from '../validators/registerValidator.js'

import { validateLoginUser } from "../validators/loginValidator.js";

import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/login", validateLoginUser,loginUser);
router.post("/signin", validateCreateUser, createUser);
router.post("/logout", logout)
router.get("/profile", authRequired, profile)


export default router;