const express = require("express");
const app = express();
const JWT = require("jsonwebtoken");
const JWT_secret = "sbkjhasd";

app.use(express.json());
// user signup and sign in
app.post("/signup", (req, res) => {});
app.post("/signin", (req, res) => {});
app.post("/purchase", (req, res) => {});
app.get("/courses", (req, res) => {});
app.get("/purchased", (req, res) => {});
