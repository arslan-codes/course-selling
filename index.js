const express = require("express");
const app = express();
// const JWT = require("jsonwebtoken");
// const JWT_secret = "sbkjhasd";
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("api/v1/admin", adminRouter);

app.listen(3000, () => {
  console.log("app is listtening to port 3000");
});
