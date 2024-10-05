const express = require("express");
const app = express();
const JWT = require("jsonwebtoken");
const JWT_secret = "sbkjhasd";

app.use(express.json());
// user signup and sign in
app.post("/user/signup", (req, res) => {});
app.post("/user/signin", (req, res) => {});
//all my courses
app.get("/user/purchases", (req, res) => {});
//to view all the courses
app.get("/courses", (req, res) => {});
//purchase a course
app.post("/course/purchase", (req, res) => {});
