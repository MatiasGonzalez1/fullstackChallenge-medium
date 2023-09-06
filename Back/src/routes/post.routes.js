import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getOnePost,
  getPostsByUser,
  updatePost,
} from "../controllers/post.controller.js";

import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/post", authRequired, getAllPosts);
router.get("/post/:id", authRequired, getOnePost);
router.get("/post/user/:id", authRequired, getPostsByUser);
router.post("/post", authRequired, createPost);
router.delete("/post/:id", authRequired, deletePost);
router.put("/post/:id", authRequired, updatePost);

export default router;
