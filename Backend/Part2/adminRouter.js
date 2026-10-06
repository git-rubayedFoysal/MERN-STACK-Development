import express from "express";
const adminRouter = express.Router();

adminRouter.param("user", (req, res, next, id) => {
  req.user = id === "1" ? "Admin" : "Anonymous";
  next();
});

adminRouter.get("/:user", (req, res, id) => {
  res.send(`Hello ${req.user}`);
});

adminRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

export default adminRouter;
