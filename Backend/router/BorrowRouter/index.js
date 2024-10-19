import Borrow from "../../db/schemas/Borrow.js";
import { Jwt } from "jwt-token";
import express from "express";

const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, sem, book } = req.body;
  const student = await Borrow.findOne({ name: req.body.name });
  if (student) {
    return res.json({ message: "Student name already exists" });
  }
  const user = new Borrow({ name, sem, book });
  user.save();
  res.json(user);
});

router.get("/borrow/display", async (req, res) => {
  const data = await Borrow.find();
  res.json(data);
});
router.get("/borrow/find/:id", async (req, res) => {
  const { id } = req.params;
  const display = await Borrow.findById(id);
  res.json(display);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Borrow.findByIdAndDelete(id);
  res.json(data);
});

export default router;
