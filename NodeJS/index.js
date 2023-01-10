const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 9045;
const UserModel = require("./models/user");
const rateLimit=require("express-rate-limit")
const SetRateLimit=rateLimit({
    windowMs:60*60*24*1000,
    max:5,
    message:"You exceed the limit try after some 24 hr"

})
app.use(express.json());

app.post("/post", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    let user = new UserModel({
      email,
      password,
    });
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).json(e);
  }
});
app.post("/login",SetRateLimit, async (req, res) => {
  try {
    let user = await UserModel.findOne({ password: req.body.password });

    res.status(200).send({ user, message: "Login successfull" });
  } catch (e) {
    res.status(500).json(e);
  }
});

mongoose.connect("mongodb://localhost:27017/PracticeNode").then(() => {
  app.listen(PORT, () => {
    console.log("Your app is running on " + PORT);
  });
});
