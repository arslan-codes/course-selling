// const { Router } = require("express");
// const JWT = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const { userModel, purchaseModel } = require("../db");
// const userMiddleware = require("../middleware/user");
// const z = require("zod");
// const userRouter = Router();
// const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD; // Make sure you have this in your config

// // User signup
// userRouter.post("/signup", async (req, res) => {
//   const requiredBody = z.object({
//     email: z.string().email().min(10).max(100),
//     password: z.string().min(3).max(10),
//     name: z.string().min(3).max(10),
//   });

//   try {
//     const parsedData = requiredBody.safeParse(req.body);
//     if (!parsedData.success) {
//       return res.status(403).json({
//         message: parsedData.error.errors,
//       });
//     }
//     const { email, password, name } = parsedData.data;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await userModel.create({
//       email,
//       password: hashedPassword,
//       name,
//     });
//     res.json({ message: "Signed up successfully" });
//   } catch (error) {
//     res.status(403).json({ message: "Invalid credentials" });
//   }
// });

// // User signin
// userRouter.post("/signin", async (req, res) => {
//   const requiredBody = z.object({
//     email: z.string().email().min(10).max(100),
//     password: z.string().min(3).max(10),
//   });

//   try {
//     const parsedData = requiredBody.safeParse(req.body);
//     if (!parsedData.success) {
//       return res.status(403).json({ message: parsedData.error.errors });
//     }
//     const { email, password } = parsedData.data;
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (passwordMatch) {
//       const token = JWT.sign({ id: user._id }, JWT_USER_PASSWORD);
//       return res.json({ token });
//     } else {
//       return res.status(403).json({ message: "Incorrect credentials" });
//     }
//   } catch (error) {
//     res.status(403).json({ message: "Invalid credentials" });
//   }
// });

// // Get user purchases
// userRouter.get("/purchases", userMiddleware, async (req, res) => {
//   const userId = req.userId;
//   const courses = await purchaseModel.find({ userId: userId });
//   res.json({ courses });
// });

// module.exports = { userRouter };
