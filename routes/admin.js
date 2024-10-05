const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "admin signup endpoint",
  });
});
adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "admin signup endpoint",
  });
});
adminRouter.post("/course", (req, res) => {
  res.json({
    message: "admin add endpoint",
  });
});
adminRouter.put("/courses/delete", (req, res) => {
  res.json({
    message: "admin edit  endpoint",
  });
});
adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "all courses endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
