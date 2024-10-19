import Staff from "../../db/schemas/StaffSchema.js";
import { Jwt } from "jwt-token";
import express from "express";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const mail = await Staff.findOne({ email: req.body.email });
  if (mail) {
    return res.status(400).json({ message: "Staff Email already exists" });
  }
  if (password != confirmPassword) {
    return res.status(400).json({ message: "Staff Passwords do not match" });
  }

  const user = new Staff({ name, email, password, confirmPassword });
  user.save();
  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Staff.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Staff Email not found" });
  }
  if (req.body.password != user.password) {
    return res.status(400).json({ message: "Staff Password is incorrect" });
  } else {
    return res.json("Staff login success");
  }
});

router.get("/staff/display", async (req, res) => {
  const display = await Staff.find();
  res.json(display);
});

router.get("/staff/find/:id", async (req, res) => {
  const { id } = req.params;
  const display = await Staff.findById(id);
  res.json(display);
});

router.patch("/staff/update/:id", async (req, res) => {
  const { id } = req.params;
  const body = { ...req.body };
  const upt = await Staff.findByIdAndUpdate(id, body);
  res.json({ true: upt });
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Staff.findByIdAndDelete(id);
  res.json(data);
});
export default router;
