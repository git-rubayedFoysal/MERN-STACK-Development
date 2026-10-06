import express from "express";
import fs from "node:fs";
import adminRouter from "./adminRouter.js";
import profileRouter from "./profileRouter.js";
// import ejs from "ejs";
const app = express();
const PORT = 4000;

app.use("/admin", adminRouter);
app.use("/profile", profileRouter);

// Error handling for sync code
app.get("/", (req, res, next) => {
  for (let i = 0; i <= 10; i++) {
    if (i === 5) {
      next("there was an error.");
    }
    res.write("a");
  }
  res.end();
});
app.get("/about", (req, res) => {
  res.send("About Page.");
});

// async code error handle
app.get("/read", (req, res, next) => {
  fs.readFile("/file-does-not-exist", (err, data) => {
    if (err) next(err);
    else res.send(data);
  });
});

app.get("/async", async (req, res, next) => {
  next(new Error("There was a async error."));
});

// error handler for custom async code
app.get("/time", (req, res, next) => {
  setTimeout(() => {
    try {
      res.send(a);
    } catch (error) {
      next(error);
    }
  }, 100);
});

// 404 error handle
app.use((req, res, next) => {
  res.status(404).send("Requested url was not found.");
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    next("headers already sent!");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("There was a server side error.");
    }
  }
});

// invisible error handler
// app.use((err, req, res, next) => {});

app.listen(PORT, () => {
  console.log(`Server started at port:${PORT}`);
});
