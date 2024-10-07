const { parse } = require("dotenv");
const { Router } = require("express");
const { adminRouter, courseModel } = Router();
const { z } = require("zod");
const bcrypt = require("bcrypt");
const { adminModel } = require("../db");
const JWT_ADMIN_PASSWORD = require("../config");
const JWT = require("jsonwebtoken");
const { adminMiddleware } = require("../middleware");
adminRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(3).max(10),
    name: z.string().min(3).max(10),
  });
  const parsedData = requiredBody.safeParse(req.body);
  try {
    if (!parsedData.success) {
      return res.status({
        error: parsedData.error.errors,
      });
    }

    const { email, password, name } = parsedData.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    await adminModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
    res.json({
      message: "signed up successfully ",
    });
  } catch (e) {
    res.status(400).json({
      message: "invalid credentials",
    });
  }
});
adminRouter.post("/signin", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(3).max(10),
  });
  try {
    const parsedData = requiredBody.safeParse(req.body);
    if (!parsedData.success) {
      res.status(300).json({
        message: parsedData.error.errors,
      });
      return;
    }
    const { email, password } = parsedData.data;
    const user = await adminModel.findOne({
      email: email,
    });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (user && passwordMatch) {
      const token = JWT.sign(
        {
          id: user._id.toString(),
        },
        JWT_ADMIN_PASSWORD
      );
      res.json({
        message: token,
      });
    } else {
      res.json({
        message: "incorrect creds",
      });
    }
  } catch (error) {
    res.status(300).json({
      message: error,
    });
  }
});

app.use(adminMiddleware);
adminRouter.post("/course", async (req, res) => {
  const adminId = req.userId;
  const { title, description, imageUrl, price } = req.body;
  const course = await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId,
  });
  res.json({
    message: " course created ",
    courseId: course._id,
  });
});
adminRouter.put("/course", async (req, res) => {
  const adminId = req.userId;
  const { title, description, imageUrl, price, courseId } = req.body;
  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    }
  );
  res.json({
    message: " course updated  ",
    courseId: course._id,
  });
});
adminRouter.get("/course/bulk", async (req, res) => {
  const adminId = req.userId;
  const courses = await courseModel.find({
    creatorId: adminId,
  });
  res.json({
    message: "course updated",
    courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
