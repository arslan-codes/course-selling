const { Router } = require("express");
const userRouter = Router();

// user signup and sign in
userRouter.post("/signup", (req, res) => {});
userRouter.post("/signin", (req, res) => {});
//all my courses
userRouter.get("/purchases", (req, res) => {});

module.exports = {
  userRouter: userRouter,
};
