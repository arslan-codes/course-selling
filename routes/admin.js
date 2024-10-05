const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "admin signup endpoint",
  });
});
adminRouter.post("/signin", (req, res) => {});
adminRouter.post("/courses/create", (req, res) => {});
adminRouter.post("/courses/delete", (req, res) => {});
adminRouter.post("/courses/add", (req, res) => {});

module.exports = {
  adminRouter: adminRouter,
};
