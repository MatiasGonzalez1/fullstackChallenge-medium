import Router from "express-promise-router";
import { createUser, loginUser, logout, profile } from "../controllers/auth.controller.js";
import {validateCreateUser} from '../validators/registerValidator.js'

import { validateLoginUser } from "../validators/loginValidator.js";

import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/login", validateLoginUser,loginUser);
router.post("/signup", validateCreateUser, createUser);
router.post("/logout", logout)
router.get("/profile", authRequired, profile)


export default router;