require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//const { userRouter } = require("./routes/user");
//const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use(express.json());

// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB URL:", process.env.MONGO_URL);

    console.log("Connected to MongoDB");

    app.listen(3000, () => {
      console.log("App is listening to port 3000");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

main();
