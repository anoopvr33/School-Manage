import Register from "../../db/schemas/RegisterSchema.js";
import express from "express";

const router = express.Router();

router.post("/register/:id", async (req, res) => {
  const body = { ...req.body };
  const register = await Register.create(body);
  res.json(register);
});

export default router;
