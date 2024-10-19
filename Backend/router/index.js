import express from "express";
import AdminRouter from "./AdminRouter/index.js";
import LibrarianRouter from "./LibrarianRouter/index.js";
import StaffRouter from "./StaffRouter/index.js";
import RegisterRouter from "./RegisterRouter/index.js";
import StudentRouter from "./StudentRouter/index.js";
import BorrowRouter from "./BorrowRouter/index.js";

const router = express.Router();

router.use("/admin", AdminRouter);
router.use("/library", LibrarianRouter);
router.use("/staff", StaffRouter);
router.use("/student", StudentRouter);
router.use("/borrow", BorrowRouter);
router.use(RegisterRouter);

export default router;
