const { Router } = require("express");
const { courseModel, PurchaseModel, purchaseModel } = require("../db");
const userMiddleware = require("../middleware/user");
const courseRouter = Router();

//to view all the courses
courseRouter.get("/preview", async (req, res) => {
  const courses = await courseModel.find({});
  res.json({
    message: "courses are here",
  });
});
//purchase a course
courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const { userId, courseId } = req.body;
  const course = await courseModel.findOne({
    courseId: courseId,
  });

  await purchaseModel.create({
    title: course.title,
    userId: userId,
    courseId: courseId,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
