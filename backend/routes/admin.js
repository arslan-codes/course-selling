const { Router } = require("express");
const { courseModel, adminModel } = require("../db");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { adminMiddleware } = require("../middleware/admin");
const z = require("zod");
const adminRouter = Router();
const JWT_ADMIN_PASSWORD = require("../../config"); // Make sure it's in your config

// Admin signup
adminRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().email().min(3).max(100),
    password: z.string().min(3).max(10),
    name: z.string().min(3).max(10),
  });

  try {
    const parsedData = requiredBody.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(403).json({ message: parsedData.error.errors });
    }
    const { email, password, name } = parsedData.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    await adminModel.create({ email, password: hashedPassword, name });
    res.json({ message: "Signed up successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

// Admin signin
adminRouter.post("/signin", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().email().min(3).max(100),
    password: z.string().min(3).max(10),
  });

  try {
    const parsedData = requiredBody.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(403).json({ message: parsedData.error.errors });
    }
    const { email, password } = parsedData.data;
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (passwordMatch) {
      const token = JWT.sign({ id: admin._id }, JWT_ADMIN_PASSWORD);
      return res.json({ token });
    } else {
      return res.status(403).json({ message: "Incorrect credentials" });
    }
  } catch (error) {
    res.status(403).json({ message: "Invalid credentials" });
  }
});

// Admin course management
// adding a course
adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const { title, description, imageUrl, price } = req.body; //object destructureing
  const course = await courseModel.create({
    title: title,
    description: description,
    ImageUrl: imageUrl,
    Price: price,
    createrId: req.userId,
  });
  res.json({ message: "Course created successfully", courseId: course._id });
});
/**
 adminrouter.post("/course",middleware,async(req,res)=>{
  const {title,book}= req.body

  const course= await courseMode.create({
  
  kjdfs})
  })
  const course = await courseNodel.updateOner({
  })
 */
//editing a course
adminRouter.put("/course", adminMiddleware, async (req, res) => {
  const { courseId, title, description, imageUrl, price } = req.body;
  const updatedCourse = await courseModel.updateOne(
    { _id: courseId, creatorId: req.userId },
    { title, description, imageUrl, price }
  );
  res.json({ message: "Course updated successfully", updatedCourse });
});

//getting all courses
adminRouter.get("/courses", adminMiddleware, async (req, res) => {
  const courses = await courseModel.find({ createrId: req.userId });
  res.json({ courses: courses });
});

module.exports = { adminRouter };
