import User from "../../db/schemas/UserSchema.js";
import { Jwt } from "jwt-token";
import express from "express";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const mail = await User.findOne({ email: req.body.email });
  if (mail) {
    return res.status(400).json({ message: "Admin Email already exists" });
  }
  if (password != confirmPassword) {
    return res.status(400).json({ message: "Admin Passwords do not match" });
  }

  const user = new User({ name, email, password, confirmPassword });
  user.save();
  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Admin Email not found" });
  }
  if (req.body.password != user.password) {
    return res.status(400).json({ message: "Admin Password is incorrect" });
  } else {
    return res.json("Admin login success");
  }
});

router.post("/admin", (req, res) => {
  const body = { ...req.body };
  if (body.email == "anoopvr@gmail.com" && body.password == "admin") {
    return res.json({ message: "Admin  login success" });
  } else {
    return res.json({ error: " Invalid admin credentials" });
  }
});

export default router;
