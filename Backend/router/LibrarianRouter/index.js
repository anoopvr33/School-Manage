import Librarian from "../../db/schemas/Librarian.js";
import { Jwt } from "jwt-token";
import express from "express";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const mail = await Librarian.findOne({ email: req.body.email });
  if (mail) {
    return res.json({ false: " Librarian Email already exists" });
  }
  if (password != confirmPassword) {
    return res.json({ error: "Librarian Passwords do not match" });
  }

  const user = new Librarian({ name, email, password, confirmPassword });
  user.save();
  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Librarian.findOne({ email });
  if (!user) {
    return res.json({ false: "Librarian Email not found" });
  }
  if (req.body.password != user.password) {
    //status 400 represent error msg
    // return res.status(400).json({ error: "Librarian Password is incorrect" });
    return res.json({ error: "Librarian Password is incorrect" });
  } else {
    return res.json("Librarian login success");
  }
});

router.get("/library/display", async (req, res) => {
  const display = await Librarian.find();
  res.json(display);
});

router.get("/library/find/:id", async (req, res) => {
  const { id } = req.params;
  const display = await Librarian.findById(id);
  res.json(display);
});

router.patch("/library/update/:id", async (req, res) => {
  const { id } = req.params;
  const body = { ...req.body };
  const upt = await Librarian.findByIdAndUpdate(id, body);
  res.json({ true: upt });
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Librarian.findByIdAndDelete(id);
  res.json(data);
});

export default router;
