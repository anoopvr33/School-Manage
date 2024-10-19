import Student from "../../db/schemas/StudentSchema.js";
import { Jwt } from "jwt-token";
import express from "express";

const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, classs, fee } = req.body;
  const student = await Student.findOne({ name: req.body.name });
  if (student) {
    return res.json({ message: "Student name already exists" });
  }
  const user = new Student({ name, classs, fee });
  user.save();
  res.json(user);
});

router.get("/student/display", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});
router.get("/student/find/:id", async (req, res) => {
  const { id } = req.params;
  const display = await Student.findById(id);
  res.json(display);
});

router.get("/student/find/paid", async (req, res) => {
  const body = { ...req.body };
  const display = await Student.find({ fee: body.fee });
  res.json(display);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Student.findByIdAndDelete(id);
  res.json(data);
});

router.patch("/student/update/:id", async (req, res) => {
  const { id } = req.params;
  const body = { ...req.body };
  const upt = await Student.findByIdAndUpdate(id, body);
  res.json({ true: upt });
});

export default router;
