const { Router } = require("express");

const courseRouter = Router();

//to view all the courses
courseRouter.get("/preview", (req, res) => {
  res.json({
    message:"courses are here"
  })
});
//purchase a course
courseRouter.post("/purchase", (req, res) => {});

module.exports = {
  courseRouter: courseRouter,
};
