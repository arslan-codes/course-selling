const { Router } = require("express");
const { userModel, purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");
const z = require("zod");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const userRouter = Router();
const { JWT_USER_PASSWORD } = require("../config");
// User signup
userRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    firstName: z.string().min(3).max(10),
    lastName: z.string().min(3).max(10),
    email: z.string().min(10).max(100).email(),
    password: z.string().min(3).max(10),
  });
  try {
    const parsedData = requiredBody.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(403).json({
        message: parsedData.error.errors,
      });
    }

    const { firstName, lastName, email, password } = parsedData.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });
    res.json({ message: "Signed up successfully" });
  } catch (error) {
    res.status(403).json({ message: "Invalid credentials" });
  }
});

// User signin
userRouter.post("/signin", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(10).max(100).email(),
    password: z.string().min(3).max(10),
  });

  try {
    const parsedData = requiredBody.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(403).json({ message: parsedData.error.errors });
    }

    const { email, password } = parsedData.data;

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    console.log("User found:", user);

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(403).json({ message: "Incorrect credentials" });
    }

    const token = JWT.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );
    console.log("JWT token generated:", token);
    return res.json({ token });
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    return res.status(403).json({ message: "Invalid credentials" });
  }
});

// Get user purchases
userRouter.get("/purchases", userMiddleware, async (req, res) => {
  const userId = req.userId;

  const purchases = await purchaseModel.find({
    userId: userId,
  });
  const purchasedCourseIds = [];
  for (let i = 0; i < purchases.length; i++) {
    purchasedCourseIds.push(purchases[i].courseId);
  }
  const courseData = await courseModel.find({
    _id: {
      $in: purchasedCourseIds,
    },
  });

  res.json({
    purchases,
    courseData,
  });
});

module.exports = { userRouter };
