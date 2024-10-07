const { Router } = require("express");
const userRouter = Router();
const JWT = require("jsonwebtoken");
const JWT_USER_PASSWORD = require("../config");
const bcrypt = require("bcrypt");
const { userModel, purchaseModel } = require("../db");
const userMiddleware = require("../middleware/user");
const z = require("zod");
// user signup and sign in
userRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(10).max(100).email(),
    password: z.string().min(3).max(10),
    name: z.string().min(3).max(10),
  });
  try {
    const parsedData = requiredBody.safeParse(req.body);
    if (!parsedData.success) {
      res.status(403).json({
        message: parsedData.error.errors,
      });
    }
    const { email, password, name } = parsedData.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
    res.json({
      message: "signed up successfuly",
    });
  } catch (error) {
    res.status(403).json({
      message: "invalid credentials",
    });
  }
});
userRouter.post("/signin", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(10).max(100).email(),
    password: z.string().min(3).max(10),
  });
  try {
    const parsedData = requiredBody.safeParse(req.body);
    if (!parsedData.success) {
      res.status(403).json({
        message: parsedData.error.errors,
      });
    }
    const { email, password } = parsedData.data;
    const user = await userModel.findone({
      email: email,
    });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (user && passwordMatch) {
      const token = JWT.sign(
        {
          id: user._id,
        },
        JWT_USER_PASSWORD
      );
      res.json({
        token: token,
      });
    }
  } catch (error) {
    res.status(403).json({
      message: "invalid credentials",
    });
  }
});
//all my courses
userRouter.get("/purchases", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courses = await purchaseModel.find({
    userId: userId,
  });
  res.json({
    courses,
  });
});

module.exports = {
  userRouter: userRouter,
};
