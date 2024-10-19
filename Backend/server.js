import mongoose from "./db/db.js";
import router from "./router/index.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.get("/halo", (req, res) => {
  res.json("Halo my dear");
});

app.listen(7000, () => {
  console.log("server is running on port 7000");
});
