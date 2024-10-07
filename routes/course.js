// const { Router } = require("express");
// const { courseModel, purchaseModel } = require("../db");
// const userMiddleware = require("../middleware/user");
// const courseRouter = Router();

// // View all courses
// courseRouter.get("/preview", async (req, res) => {
//   const courses = await courseModel.find({});
//   res.json({ courses });
// });

// // Purchase a course
// courseRouter.post("/purchase", userMiddleware, async (req, res) => {
//   const { userId, courseId } = req.body;
//   const course = await courseModel.findOne({ _id: courseId });
//   if (!course) {
//     return res.status(404).json({ message: "Course not found" });
//   }
//   await purchaseModel.create({
//     title: course.title,
//     userId,
//     courseId,
//   });
//   res.json({ message: "Course purchased successfully" });
// });

// module.exports = { courseRouter };
