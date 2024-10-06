const { parse } = require("dotenv");
const { Router } = require("express");
const adminRouter = Router();
const { z } = require("zod");
const bcrypt = requier("bcrypt");
const { adminModel } = require("../db");
const JWT_ADMIN_PASSWORD = require("../config");
const JWT = require("jsonwebtoken");
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
      message: "admin signup endpoint",
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
    const passwordMatch = bcrypt.compare(password, user.password);
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
adminRouter.post("/", (req, res) => {
  res.json({
    message: "admin add course",
  });
});
adminRouter.put("/delete", (req, res) => {
  res.json({
    message: "admin edit  endpoint",
  });
});
adminRouter.get("/bulk", (req, res) => {
  res.json({
    message: "all courses endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
